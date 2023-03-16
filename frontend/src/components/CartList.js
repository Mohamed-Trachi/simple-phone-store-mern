import Item from "./CartItem";
import { useGlobalContext } from "./context";
const CartList = () => {
	const { cart } = useGlobalContext();
	if (cart.length === 0) {
		return (
			<section className="cart">
				<header>
					<h2>your bag</h2>
					<h4 className="empty-cart">is currently empty</h4>
				</header>
			</section>
		);
	}
	return (
		<ul className="cart-list">
			{cart.map((item) => {
				return <Item item={item} key={item.id} />;
			})}
		</ul>
	);
};
export default CartList;
