import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import cartItems from "../data";
import { createClient } from "contentful";

const AppContext = React.createContext();
const initialState = {
	cart: [],
	loading: true,
	total_amount: 0,
	total: 0,
};

const client = createClient({
	space: "/* your space */",
	accessToken: "/* your access token */",
});

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const clearCart = () => dispatch({ type: "CLEAR_CART" });
	const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });
	const increase = (id) => dispatch({ type: "INCREASE", payload: id });
	const decrease = (id) => dispatch({ type: "DECREASE", payload: id });
	const toggleAmount = (id, type) => {
		dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
	};
	const fetchData = () => {
		dispatch({ type: "LOADING" });
		client
			.getEntries({ content_type: "brand", select: "fields" })
			.then((res) => {
				if (!res) {
					return dispatch({ type: "DISPLAY_ITEMS", payload: cartItems });
				}
				const cart = res.items.map((item) => {
					const newCart = {
						...item.fields,
						img: "https://" + item.fields.img.fields.file.url.slice(2),
						id: item.sys.id,
					};
					return newCart;
				});
				dispatch({ type: "DISPLAY_ITEMS", payload: cart });
			});
	};
	useEffect(() => {
		fetchData();
	}, []);
	useEffect(() => {
		dispatch({ type: "GET_TOTALS" });
	}, [state.cart]);
	return (
		<AppContext.Provider
			value={{
				...state,
				clearCart,
				removeItem,
				increase,
				decrease,
				toggleAmount,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
export const useGlobalContext = () => {
	return useContext(AppContext);
};
export { AppContext, AppProvider };
