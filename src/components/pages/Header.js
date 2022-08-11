import React from "react";
import header_img from "../../images/header__img.png";

function Header() {
  return (
    <div className="header__container">
      <div className="header__container_left">
        <h3 className="header__container_title">Welcome to GreenShop</h3>
        <h1 className="header__container_name">
          Let’s Make a <br /> Better<span> Planet</span>
        </h1>
        <p className="header__container_text">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
        <button className="header__container_shop">SHOP NOW</button>
      </div>
      <div className="header__container_right">
        <img src={header_img} alt="header" />
      </div>
    </div>
  );
}

export default Header;
