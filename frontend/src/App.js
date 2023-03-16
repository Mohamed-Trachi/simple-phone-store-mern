import Navbar from "./components/Navbar";
import List from "./components/CartList";
import { useGlobalContext } from "./components/context";

const App = () => {
	const { clearCart, total, loading } = useGlobalContext();
	return (
		<main>
			<Navbar />
			{!loading && (
				<>
					<List />
					<div className="line"></div>
					<div className="total">
						<h4>Total</h4>
						<h4>{total}</h4>
					</div>
					<button className="clear-btn" onClick={clearCart}>
						clear list
					</button>
				</>
			)}
		</main>
	);
};
export default App;
