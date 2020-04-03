import React from "react";
import "./header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header-main">
        <div className="header-left">
          <a href="#home">
            <div className="logo"></div>
          </a>
        </div>
        <div className="header-right">
          <div className="header-social-media">
            <a href="#twitter">
              <div className="twitter"></div>
            </a>
            <a href="#facebook">
              <div className="facebook"></div>
            </a>
          </div>
          <div className="header-social-donate">
            <a href="#donate">
              <div className="donate"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
