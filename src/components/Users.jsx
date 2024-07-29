import React from "react";
import { UserLoginContext } from "../context/UserLoginContext";

const Users = () => {
  const { setCurrentUser } = React.useContext(UserLoginContext);

  const handleUserLogin = (event) => {
    event.preventDefault();
    setCurrentUser(event.target.value);
  };

  return (
    <form onSubmit={handleUserLogin}>
      <label>Users</label>
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
  );
};

export default Users;
