import { Component } from "react";
import { connect } from "react-redux";

import * as usersActions from "../../actions/users";
import * as postsActions from "../../actions/posts";

const { getAll: getAllUsers } = usersActions;
const { getAll: getAllPosts } = postsActions;

class Posts extends Component {
  componentDidMount() {
    if (!this.props.users.length) {
      this.props.getAllUsers();
    }
  }

  render() {
    console.log(this.props)
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
  getAllPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
