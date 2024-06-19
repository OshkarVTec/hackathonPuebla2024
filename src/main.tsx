import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "regenerator-runtime";
import "./index.css";
import axios from "axios";
import { Toaster } from "react-hot-toast";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.headers.post["Content-Type"] = "application/json";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Toaster />
		<App />
	</React.StrictMode>
);
