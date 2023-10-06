import { useState } from "react";
import "../Scss/index.scss";
import { Input } from "../Components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [IsRegistered, setIsRegistered] = useState(
    localStorage.getItem("IsRegistered")
  );
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("IsAdmin", false);
    if (
      Username === import.meta.env.VITE_ADMIN_USERNAME &&
      Password === import.meta.env.VITE_ADMIN_PASSWORD
    ) {
      localStorage.setItem("IsAdmin", true);
    }
    localStorage.setItem("Username", Username);
    localStorage.setItem("IsRegistered", true);
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div className="loginPage">
        <div className="logoName"> </div>
        {IsRegistered ? (
          <form onSubmit={handleSubmit}>
            <h1> Login </h1>
            <Input
              value={"Username"}
              setFunc={(value) => {
                setUsername(value);
              }}
            />
            <Input
              value={"Password"}
              setFunc={(value) => {
                setPassword(value);
              }}
            />
            <button type="submit">Login</button>
          </form>
        ) : (
          {
            /* <Navigate to="/" /> */
          }
        )}
      </div>
    </>
  );
};

export default Login;
