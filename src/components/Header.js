import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <header className="header">
        <img
          alt="Troll Face"
          src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
          className="header--image"
        />
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">React Course - Project 3</h4>
      </header>
    </div>
  );
};

export default Header;
