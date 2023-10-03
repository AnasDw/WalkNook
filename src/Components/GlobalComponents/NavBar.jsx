import { Link } from "react-router-dom";
import "../../Scss/index.scss";

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/"> Men </Link>
              </li>
              <li>
                <Link to="/"> Women </Link>
              </li>
              <li>
                <Link to="/"> Kids </Link>
              </li>
              <li>
                <Link to="/"> Accessories </Link>
              </li>
            </ul>
          </li>

          <li>
            <ul>
              <li>
                <Link to="/">
                  <li className="search_Icon"></li>
                  <li>Search</li>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <li className="cart_Icon"></li>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <li className="menu_Icon"></li>
                </Link>
              </li>
              
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
