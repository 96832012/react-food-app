import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CartContextProvider from "./context/CartContextProvider.jsx";
import ShowContextProvider from "./context/ShowContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContextProvider>
      <ShowContextProvider>
        <App />
      </ShowContextProvider>
    </CartContextProvider>
  </React.StrictMode>
);
