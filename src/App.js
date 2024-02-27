import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages";
import SkinCare from "./pages/SkinCare";

function App(){  

  return (
    <Router>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />} />
            <Route path="/skinCare" element={<SkinCare />} />
  
        </Routes>
    </Router>
);

};

export default App;
