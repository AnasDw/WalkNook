import { Link, useNavigate } from "react-router-dom";
import "../../Scss/index.scss";
import { useEffect, useState } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(
    localStorage.getItem("IsRegistered") === "true"
  );

  useEffect(() => {}, []);

  function LogOut() {
    setState(false);
    localStorage.setItem("IsRegistered", "false");
    localStorage.setItem("IsAdmin", "false");
    localStorage.setItem("Username", null);
    navigate("/");
  }

  return (
    <>
      <nav className="nav">
        <div>
          <ul>
            <li>
              <Link className="logoName" to="/"></Link>
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
              <Link className="Icon cart_Icon" to="/"></Link>
            </li>
            <li>
              <Link to="/login">
                <li className="Icon user_Icon"></li>
                {state ? (
                  <>
                    <div className="dropdown">
                      <li> {`${localStorage.getItem("Username")} ⇣`}</li>
                      <div className="dropdown-content">
                        <li>Profile</li>
                        <li
                          onClick={() => {
                            LogOut();
                          }}
                        >
                          LogOut
                        </li>
                      </div>
                    </div>
                  </>
                ) : (
                  <li> Login </li>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
