import React from "react";
import linkedin from "../assets/images/LinkedinLogo.png"
import instagram from "../assets/images/InstagramLogo.png"
const Footer = () => {
  return (
    <div>
      <div className="footerContainer">
        <div className="footer">
          <div className="footerLeft">
            <span>Prompt Generetor</span>
            <span>Dweep Daily</span>
            <span>All Contributors</span>
            <span>Your data on Dweep.io</span>
            <span>Contribute to Dweep</span>
          </div>
          <div className="footerRight">
            <span>dweep.io</span>
            <span>Made with love in India</span>
            <div className="logoContainer">
              <img
                src={linkedin}
                alt="linkedin logo here"
               
              />
              <img
                src={instagram}
                alt="instagram logo here"
               
              />
            </div>
            <br />
            <span>hello@dweep.io</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
