const reducer = (state, action) => {
	if (action.type === "CLEAR_CART") {
		return { ...state, cart: [] };
	}
	if (action.type === "REMOVE_ITEM") {
		return {
			...state,
			cart: state.cart.filter((item) => {
				return item.id !== action.payload;
			}),
		};
	}
	if (action.type === "INCREASE") {
		let tempCart = state.cart.map((item) => {
			if (item.id === action.payload) {
				return { ...item, amount: item.amount + 1 };
			}
			return item;
		});
		return { ...state, cart: tempCart };
	}
	if (action.type === "DECREASE") {
		let tempCart = state.cart
			.map((item) => {
				if (item.id === action.payload) {
					return { ...item, amount: item.amount - 1 };
				}
				return item;
			})
			.filter((item) => {
				return item.amount !== 0;
			});
		return { ...state, cart: tempCart };
	}
	if (action.type === "GET_TOTALS") {
		let { total, total_amount } = state.cart.reduce(
			(cartTotal, cartItem) => {
				const { price, amount } = cartItem;
				const itemTotal = price * amount;
				cartTotal.total += itemTotal;
				cartTotal.total_amount += amount;
				return cartTotal;
			},
			{
				total: 0,
				total_amount: 0,
			}
		);
		total = parseFloat(total.toFixed(2));
		console.log({ ...state, total, total_amount });
		return { ...state, total, total_amount };
	}
	if (action.type === "TOGGLE_AMOUNT") {
		let tempCart = state.cart
			.map((item) => {
				if (item.id === action.payload.id) {
					if (action.payload.type === "inc") {
						return { ...item, amount: item.amount++ };
					}
					if (action.payload.type === "dec") {
						return { ...item, amount: item.amount-- };
					}
				}
				return item;
			})
			.filter((item) => item.amount !== 0);
		return { ...state, cart: tempCart };
	}
	if (action.type === "LOADING") {
		console.log("loading");
		return {
			...state,
			loading: true,
		};
	}
	if (action.type === "DISPLAY_ITEMS") {
		console.log("display items");
		return {
			...state,
			loading: false,
			cart: action.payload,
		};
	}
	throw new Error("no matching action type");
};
export default reducer;
