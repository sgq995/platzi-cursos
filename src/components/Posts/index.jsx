import { Component } from "react";
import { connect } from "react-redux";

import * as usersActions from "../../actions/users";
import * as postsActions from "../../actions/posts";

const { getAll: getAllUsers } = usersActions;
const { getByUser: postsGetByUser } = postsActions;

class Posts extends Component {
  async componentDidMount() {
    if (!this.props.users.length) {
      await this.props.getAllUsers();
    }
    this.props.postsGetByUser(this.props.match.params.id);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Publicaciones de { }</h1>
        {this.props.match.params.id}
      </div>
    );
  }
}

const mapStateToProps = ({ users, posts }) => {
  return {
    users,
    posts
  };
};

const mapDispatchToProps = {
  getAllUsers,
  postsGetByUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
