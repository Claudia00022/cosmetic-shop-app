import React from "react";
import CosmeticCard from "../components/Navbar/Card";
import Accordion from 'react-bootstrap/Accordion';


function HairCare(){
    return <>
       <div className="d-flex bg-white height ">
       
       <div className="left-acc ms-3 border-end fixed-top">
        <p className="ms-5">hair care</p>
        <hr></hr>
        <div>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" className="border-0">
        <Accordion.Header>type of skin </Accordion.Header>
        <Accordion.Body>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="border-0">
        <Accordion.Header>products </Accordion.Header>
        <Accordion.Body>
        <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="border-0">
        <Accordion.Header>ingredients</Accordion.Header>
        <Accordion.Body>
        <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
       </div>
       <div className="w-75 ms-auto  row">
        <div className="col-4"><CosmeticCard /></div>
        <div className="col-4"><CosmeticCard /></div>
        <div className="col-4"><CosmeticCard /></div>
        <div className="col-4"><CosmeticCard /></div>
        <div className="col-4"><CosmeticCard /></div>
        <div className="col-4"><CosmeticCard /></div>
        <div className="col-4"><CosmeticCard /></div>
        <div className="col-4"><CosmeticCard /></div>
        <div className="col-4"><CosmeticCard /></div>
        
        </div>

        </div>
    </>
};

export default HairCare;