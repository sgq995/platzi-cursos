import { useEffect } from "react";
import { connect } from "react-redux";

import Spinner from "../Spinner";

import * as usersActions from "../../actions/users";

import "./index.css";
import Fatal from "../Fatal";
import Table from "../Table";
import { Link } from "react-router-dom";

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
      <td>
        <Link to={`/posts/${user.id}`}>
          <div className="eye-solid icon"></div>
        </Link>
      </td>
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
