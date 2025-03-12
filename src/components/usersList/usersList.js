import React from "react";
import { users } from "data/users.js";
import UsersListItem from "components/UsersListItem/UsersListItem";

const UserList = () => (
  <div>
    <ul>
      {users.map((userData) => (
        <UsersListItem userData={userData}></UsersListItem>
      ))}
    </ul>
  </div>
);

export default UserList;
