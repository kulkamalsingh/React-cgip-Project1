import React from "react";
import Vector from "../assets/images/Vector.png";
const Header = () => {
  return (
    <div>
      <div className="headerContainer">
        <div className="header">
          <div classNameName="headerLeft">
            <h1>An inspiring design delivered to your inbox every morning</h1>
            <br />
            <p>
              Our team scouts the internet for the best designs, illustrations
              and art and delivers a truly inspiring one every day to your inbox
            </p>
            <br />
            <h3>Show me how it works</h3>
            <br />
            <div className="registerContainer">
              <input type="text" placeholder="Your e-mail address" />
              <button>Register Now</button>
            </div>{" "}
            <br />
            <span className="freenodata">
              {" "}
              Free - No Spam - No Data Sharing
            </span>
          </div>
          <div className="headerRight">
            <div className="imageContainer">
              <img src={Vector} alt="image here" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
