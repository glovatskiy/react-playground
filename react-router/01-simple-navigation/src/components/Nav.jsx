import { Link } from "react-router";
const Nav = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-items">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
