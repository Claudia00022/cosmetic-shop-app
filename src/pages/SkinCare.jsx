import React from "react";
import CosmeticCard from "../components/Navbar/Card";

function SkinCare(){
    return <>
       <div className="d-flex bg-white height ">
       <div className="w-50"></div>
       <div className="w-50 row">
        <div className="col-6"><CosmeticCard /></div>
        <div className="col-6"><CosmeticCard /></div>
        <div className="col-6"><CosmeticCard /></div>
        <div className="col-6"><CosmeticCard /></div>
        <div className="col-6"><CosmeticCard /></div>
        <div className="col-6"><CosmeticCard /></div>
        
        </div>

        </div>
    </>
};

export default SkinCare;