import { Link } from "react-router-dom"

const Menu = (props) => {
  return (
    <nav id="menu">
      <Link to="/">Users</Link>
      <Link to="/tasks">Tasks</Link>
    </nav>
  )
}

export default Menu;
