import React from "react";
import "../../src/App.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
const Header = () => {
  return (
    <header style={{ display: "flex" }}>
      <div className="header-name">
        <span>
          <span
            style={{ marginRight: "3px", fontWeight: "bold", color: "pink" }}
          >
            M
          </span>
          <span
            style={{ marginRight: "3px", fontWeight: "bold", color: "black" }}
          >
            o
          </span>
          <span
            style={{ marginRight: "3px", fontWeight: "bold", color: "black" }}
          >
            B
          </span>
          <span
            style={{ marginRight: "3px", fontWeight: "bold", color: "black" }}
          >
            o
          </span>
          <span
            style={{ marginRight: "3px", fontWeight: "bold", color: "black" }}
          >
            o
          </span>
          <span
            style={{ marginRight: "3px", fontWeight: "bold", color: "pink" }}
          >
            M
          </span>
        </span>
      </div>

      <div className="header-search">
        <input type="text" placeholder="Search" />
        <div style={{ display: "flex" }}>
          <p style={{ marginLeft: "40px", marginRight: "60px" }}>Store</p>
          <p style={{ marginRight: "60px" }}>Account</p>
          <p style={{ marginRight: "60px" }}>Wishlist</p>
          <p>Basket</p>
          <ShoppingBasketIcon
            style={{ marginLeft: "25px", paddingTop: "13px" }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
