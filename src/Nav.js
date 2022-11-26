import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() { 
 const [show, handleShow] = useState(false);
 const navigate = useNavigate();

 const handleClick =() => {
    navigate('/profile');
 }

 const mainClick =() => {
    navigate('/');
 }
 
 const transitionNavBar = () => {
    if (window.scrollY > 100){
        handleShow(true);
    }else {
        handleShow(false)
    }
 };

 useEffect(() => {
    window.addEventListener("scroll",transitionNavBar);
    return () => window.removeEventListener("scroll",transitionNavBar);
 }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className="nav_contents">
        <img
            onClick={mainClick}
            className="nav_logo" 
            src="https://subtv-iptv.live/wp-content/uploads/2021/05/favicon-2-150x150@2x.png"
             alt=""
             />
        
        <img 
        onClick={handleClick}
        className="nav_avatar"
        src="https://tse4.mm.bing.net/th?id=OIP.Lq7eL8DmEEXH12vCySD5mgHaHa&pid=Api&P=0" 
        alt=""
        />
        </div>
    </div>
  );
}

export default Nav;
