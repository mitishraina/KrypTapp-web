import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";
import Stock from "./components/Stock";

ReactDOM.render(
  <TransactionsProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/KrypTapp-web/' element={<App />}></Route>
        <Route path='/KrypTapp-web//stock' element={<Stock />}></Route>
      </Routes>
    </BrowserRouter>
  </TransactionsProvider>,
  document.getElementById("root"),
);
