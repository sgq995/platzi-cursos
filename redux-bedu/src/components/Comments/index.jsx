import { connect } from "react-redux";
import Fatal from "../Fatal";
import Spinner from "../Spinner";

const Comments = (props) => {
  if (props.commentsError) {
    return <Fatal message={props.commentsError} /> 
  }

  if (props.commentsLoading && props.comments.length === 0) {
    return <Spinner />
  }

  const putComments = () => (props.comments.map((comment) => (
    <li>
      <b><u>{comment.email}</u></b>
      <br />
      {comment.body}
    </li>
  )))

  return (
    <ul>
      {putComments()}
    </ul>
  )
};

const mapStateToProps = ({ posts }) => {
  return posts;
};

export default connect(mapStateToProps)(Comments);
