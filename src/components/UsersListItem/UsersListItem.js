import React from "react";
import PropTypes, { object } from "prop-types";

const UsersListItem = ({ userData: { average, name, attendance = "0%" } }) => (
  <div>
    <li>
      <div>{name}</div>
      <div>{attendance}</div>
      <div>{average}</div>
      <button>X</button>
    </li>
  </div>
);

UsersListItem.PropTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
