import { useEffect } from "react";
import { connect } from "react-redux";

import * as usersActions from "../../actions/users";

import "./index.css";

const Users = ({ users, getAll }) => {
  useEffect(() => {
    getAll();
  }, [getAll]);

  const putRows = (users) => users.map((user) => (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.link}</td>
    </tr>
  ));

  return (
    <table className="table">
      <thead>
        <tr>
          <td>Nombre</td>
          <td>Correo</td>
          <td>Enlace</td>
        </tr>
      </thead>
      <tbody>
        {putRows(users)}
      </tbody>
    </table>
  );
}

const mapStateToProps = (reducers) => {
  return reducers.users;
};

export default connect(mapStateToProps, usersActions)(Users);
