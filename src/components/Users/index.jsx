import { useEffect } from "react";
import { connect } from "react-redux";

import Spinner from "../Spinner";

import * as usersActions from "../../actions/users";

import "./index.css";
import Fatal from "../Fatal";
import Table from "../Table";

const Users = (props) => {
  const { users, loading, error, getAll } = props;

  useEffect(() => {
    getAll();
  }, [getAll]);

  const putRows = (users) => users.map((user) => (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.website}</td>
      <td>{user.id}</td>
    </tr>
  ));

  const putContent = (loading) => {
    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <Fatal message={error} />;
    }

    return (
      <Table>
        {putRows(users)}
      </Table>
    );
  }

  return putContent(loading);
}

const mapStateToProps = (reducers) => {
  return reducers.users;
};

export default connect(mapStateToProps, usersActions)(Users);
