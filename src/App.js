import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
      <Route path="/" element={<><Header/><Home/></>}>
      </Route>
      
      
    </Routes>

      </div>
   
    
    </Router>
 
  );
}

export default App;
