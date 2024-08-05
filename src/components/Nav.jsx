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
        <a>Home</a>
      </Link>
      <Topics/>
      <p>hiya {currentUser}!</p>
      <Users />
    </nav>
  );
};

export default Nav;
