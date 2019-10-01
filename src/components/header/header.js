import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ fontSize: "3rem" }}>
      <Link to="/">HOMEPAGE</Link>
      <Link to="/shop"> SHOP </Link>
    </div>
  );
};

export default Header;
