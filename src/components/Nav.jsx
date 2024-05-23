import React from "react";
import { Link } from "react-router-dom";
import { UserLoginContext } from "../context/UserLoginContext";
import Users from "./Users";
import Topics from "./Topics"
import Header from "./Header"
const Nav = () => {
  const { currentUser } = React.useContext(UserLoginContext);

  return (
    <nav className="navbar">
      <Header/>
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
