import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { AppProvider } from "./components/context";
const Index = () => {
	return (
		<AppProvider>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</AppProvider>
	);
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
