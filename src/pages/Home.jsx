import React from "react";
import { NavLink } from "react-router-dom";
 
const Home = (props) => {
    return (
        <div>
        <div className="w-25 centeredY"><h1 className="main-text">Self-love is the best love</h1></div>
            
           <NavLink to="skinCare"> <button onClick = {props.changeColorNav} className="main-button centerdY">shop now </button></NavLink>
        </div>
    );
};
 
export default Home;