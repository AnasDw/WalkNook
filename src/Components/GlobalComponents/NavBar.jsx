import { Link, Navigate } from "react-router-dom";
import "../../Scss/index.scss";

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <div>
          <ul>
            <li>
              <Link to="/">
                <div className="logoName"></div>
              </Link>
            </li>
            <li>
              <Link to="/category/men"> Men </Link>
            </li>
            <li>
              <Link to="/category/women"> Women </Link>
            </li>
            <li>
              <Link to="/category/kids"> Kids </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <Link className="flex" to="/">
                <li className="Icon search_Icon"></li>
                <li>Search</li>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div className="Icon cart_Icon"></div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div className="Icon menu_Icon"></div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
