import React from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function ProfileScreen() {
    const user = useSelector(selectUser);
    const navigate = useNavigate();

 const handleClick =() => {
    navigate('/subscribe');
 }

  return (
  <div className="profileScreen">
    <Nav />
    <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
            <img src="https://www.cutenessoverflow.com/wp-content/uploads/2018/03/happy-husky.jpg" 
            alt=""/>
            <div className="profileScreen_details">
                <h2>{user.email}</h2>

                <h3>Feedback</h3>
                <div className="feedback">
                <input type="text" placeholder="feedback"/></div>

                <div className="profileScreen_plan">
                    <h3>Plans</h3>
                </div>
                <div className="profileplan_details">
                    <h3>🔥 OTT Standard(1080p)</h3>
                    <h3>🔥 OTT Basic(480p)</h3>
                    <h3>🔥 OTT Premium(4K+HDR)</h3>
                </div>

                <button 
                onClick={handleClick}
                className="profileScreen_subscribe">Subscribe</button>

                <button 
                    onClick={() => auth.signOut()}
                className="profileScreen_signout">Sign Out</button>
            </div>
        </div>
    </div>
  </div>);
}

export default ProfileScreen;
