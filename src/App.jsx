import React from "react";
import Layout from "./Layout";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SkinCare from "./pages/SkinCare";
import BodyCare from "./pages/BodyCare";
import HairCare from "./pages/HairCare";

function App() {
  return (
    <Router>
      <Routes>
        <Route element = {<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/skinCare" element={<SkinCare />} />
          <Route path="/bodyCare" element={<BodyCare />} />
          <Route path="/hairCare" element={<HairCare />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
