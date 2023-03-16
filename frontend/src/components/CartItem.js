import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useGlobalContext } from "./context";
const CartItem = ({ item }) => {
	const { removeItem, increase, decrease } = useGlobalContext();
	const { id, title, price, img, amount } = item;
	return (
		<li className="cart-item">
			<img className="item-img" src={img} alt={title} />
			<div className="item-body">
				<h3 className="item-title">{title}</h3>
				<span className="item-price">${price}</span>
				<button className="remove-btn" onClick={() => removeItem(id)}>
					remove
				</button>
			</div>
			<div className="item-count">
				<button className="count-btn" onClick={() => increase(id)}>
					<FaArrowUp />
				</button>
				<p className="item-amount">{amount}</p>
				<button className="count-btn" onClick={() => decrease(id)}>
					<FaArrowDown />
				</button>
			</div>
		</li>
	);
};
export default CartItem;
