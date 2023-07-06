import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider

import store from "./redux/store";

import App from "./App";
import CartPage from "./pages/CartPage";
import FavouritesPage from "./pages/FavouritesPage";
import Errorpage from "./pages/Errorpage";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

export default function Index() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favourite" element={<FavouritesPage />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

root.render(<Index />);
