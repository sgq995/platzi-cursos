import { Component } from "react";
import { connect } from "react-redux";

import * as usersActions from "../../actions/users";
import * as postsActions from "../../actions/posts";
import Spinner from "../Spinner";
import Fatal from "../Fatal";
import Comments from "../Comments";

const { getAll: getAllUsers } = usersActions;
const {
  getByUser: postsGetByUser,
  openClose,
  getComments,
} = postsActions;

class Posts extends Component {
  async componentDidMount() {
    const {
      getAllUsers,
      postsGetByUser,
      match: { params: { id } }
    } = this.props;

    if (this.props.users.users.length === 0) {
      await getAllUsers();
    }

    if (this.props.users.error) {
      return;
    }

    if (!('postsKey' in this.props.users.users[id])) {
      postsGetByUser(id);
    }
  }

  putUser = () => {
    const {
      users,
      match: { params: { id } }
    } = this.props;

    if (users.error) {
      return <Fatal message={users.error} />
    }

    if (users.users.length === 0 || users.loading) {
      return <Spinner />
    }

    return (
      <h1>Publicaciones de {users.users[id].name}</h1>
    );
  }

  putPosts = () => {
    const {
      users: usersReducer,
      users: { users },
      posts: postsReducer,
      posts: { posts },
      match: { params: { id } }
    } = this.props;

    if (users.length === 0) {
      return <></>;
    }

    if (usersReducer.error) {
      return <></>;
    }

    if (postsReducer.loading) {
      return <Spinner />;
    }

    if (postsReducer.error) {
      return <Fatal message={postsReducer.error} />;
    }

    if (posts.length === 0) {
      return <></>;
    }

    if (!('postsKey' in users[id])) {
      return <></>;
    }

    const { postsKey } = users[id];
    return this.showInfo(posts, postsKey);
  }

  showInfo = (posts, postsKey) => (
    posts[postsKey].map((post, idx) => (
      <div
        key={post.id}
        className="post__title"
        onClick={() => this.showComments(postsKey, idx, post.comments)}
      >
        <h2>{post.title}</h2>
        <h3>{post.body}</h3>
        {post.isOpen ? <Comments comments={post.comments} /> : <></>}
      </div>
    ))
  )

  showComments = (postsKey, idx, comments) => {
    this.props.openClose(postsKey, idx);
    if (comments.length === 0) {
      this.props.getComments(postsKey, idx);
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.putUser()}
        {this.putPosts()}
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
  openClose,
  getComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
