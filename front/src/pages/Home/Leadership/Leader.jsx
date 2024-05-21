import React from "react";
import "./leader.css";
import { SlSocialFacebook } from "react-icons/sl";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Leader = () => {
  return (
    <div className="leadership">
      <h1 className="leader">OUR LEADERSHIP</h1>
      <p className="leaderparam">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut corporis,
        eius, eos
        <br />
        consectetur consequuntur sit. Aut, perspiciatis, reprehenderit.
      </p>
      <div className="usercard">
        <div className="card1">
          <div className="image"> </div>
          <p className="params" style={{marginTop:"20px"}}>MINING EXPERT</p>
          <h5 style={{color:"rgb(183,211,226)", textAlign:"center"}}>Lorem ipsum dolor sit amet,<br/>consectetur adipisicing elit. Atque,<br/>repellat. At, soluta. Repellendus<br/>vero, consequuntur!</h5>
          <div className="icons">
            <SlSocialFacebook className="icon"  /> 
           <FaTwitter className="icon"  />
           <FaInstagram className="icon" />
          </div>
        </div>

        <div className="card2">
        <div className="image2"> </div>
          <p className="params" style={{marginTop:"20px"}}>MINING EXPERT</p>
          <h5 style={{color:"rgb(183,211,226)", textAlign:"center"}}>Lorem ipsum dolor sit amet,<br/>consectetur adipisicing elit. Atque,<br/>repellat. At, soluta. Repellendus<br/>vero, consequuntur!</h5>
          <div className="icons">
            <SlSocialFacebook className="icon"  /> 
           <FaTwitter className="icon"  />
           <FaInstagram className="icon" />
          </div>

        </div>

        <div className="card3">
        <div className="image3"> </div>
          <p className="params" style={{marginTop:"20px"}}>MINING EXPERT</p>
          <h5 style={{color:"rgb(183,211,226)", textAlign:"center"}}>Lorem ipsum dolor sit amet,<br/>consectetur adipisicing elit. Atque,<br/>repellat. At, soluta. Repellendus<br/>vero, consequuntur!</h5>
          <div className="icons">
            <SlSocialFacebook className="icon"  /> 
           <FaTwitter className="icon"  />
           <FaInstagram className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leader;
