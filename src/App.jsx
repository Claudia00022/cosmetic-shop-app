import React, { useState } from "react";
import Layout from "./Layout";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SkinCare from "./pages/SkinCare";
import BodyCare from "./pages/BodyCare";
import HairCare from "./pages/HairCare";
import "./styles.css";

function App() {
  const [backgroundColor, setBackgroundColorNav] = useState(
    "rgba(5, 5, 5, 0.42)"
  );
  const [borderColor, setBorderColorLogIn] = useState("#BEB985");

  function handleButtonClicked() {
    setBackgroundColorNav("#98946B");
    setBorderColorLogIn("#FFFFFC");
    console.log("click");
  }

  function handleButtonBack() {
    setBackgroundColorNav("rgba(5, 5, 5, 0.42)");
    setBorderColorLogIn("#BEB985");
  }
  return (
    <Router>
      <Routes>
        <Route
          element={
            <Layout
              backgroundColorNav={backgroundColor}
              borderColor={borderColor}
              handleButtonClicked={handleButtonClicked}
              handleButtonBack = {handleButtonBack}
            />
          }
        >
          <Route exact path="/" element={<Home 
            changeColorNav = {handleButtonClicked}
          />} />
          <Route path="/skinCare" element={<SkinCare />} />
          <Route path="/bodyCare" element={<BodyCare />} />
          <Route path="/hairCare" element={<HairCare />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
