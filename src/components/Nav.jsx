import React from "react";
import { Link } from "react-router-dom";
import { UserLoginContext } from "../context/UserLoginContext";
import Users from "./Users";
import Topics from "./Topics"
const Nav = () => {
  const { currentUser } = React.useContext(UserLoginContext);

  return (
    <nav className="navbar">
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <Topics/>
      <h4>hiya {currentUser}!</h4>
      <Users />
    </nav>
  );
};

export default Nav;
