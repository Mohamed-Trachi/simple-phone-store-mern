import { FaCartPlus } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Navbar = () => {
	const { total_amount } = useGlobalContext();
	return (
		<nav>
			<h1 className="nav-title">UseReducer</h1>
			<div className="cart-amount">
				<FaCartPlus className="cart-icon" />
				<p className="total-amount">{total_amount}</p>
			</div>
		</nav>
	);
};
export default Navbar;
