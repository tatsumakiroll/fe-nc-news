import React from "react";
import { Link } from "react-router-dom";
import { UserLoginContext } from "../context/UserLoginContext";

const Nav = () => {
  const { currentUser, setCurrentUser } = React.useContext(UserLoginContext);

  const handleUserLogin = (event) => {
    event.preventDefault();
    setCurrentUser(event.target.value);
  };

  //hard coded options in list below, map from userList kept failing

  return (
    <nav className="navbar">
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <h3>Topics</h3>
      <h4>hiya {currentUser}!</h4>
      <form onSubmit={handleUserLogin}>
        <label>Users </label>
        <select>
          <option onClick={handleUserLogin} value="tickle122">
            tickle122
          </option>
          <option onClick={handleUserLogin} value="grumpy19">
            grumpy19
          </option>
          <option onClick={handleUserLogin} value="happyamy2016">
            happyamy2016
          </option>
          <option onClick={handleUserLogin} value="cooljmessy">
            cooljmessy
          </option>
          <option onClick={handleUserLogin} value="weegembump">
            weegembump
          </option>
          <option onClick={handleUserLogin} value="jessjelly">
            jessjelly
          </option>
        </select>
      </form>
    </nav>
  );
};

export default Nav;
