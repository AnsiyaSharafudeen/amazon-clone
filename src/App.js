import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/">
            
            
          </Route>
          <Route path="/checkout">
            <Header />
            <Home />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
