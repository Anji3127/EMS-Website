import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { loginUser } from "../services/authentication";
// import context from "react-bootstrap/esm/AccordionContext";
import { myContext } from "../../../context/MyContext";

export default function Login() {
  const { user, setUser } = useContext(myContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(email, password);
      setUser(res);
      if (user) navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <div className="nav-header">
        <Link to="/">
          <img
            src="https://images.unsplash.com/photo-1640951613773-54706e06851d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
            className="header-logo"
            alt="LeftOver"
          />
        </Link>
      </div>
      <div className="login-cont">
        <div className="container d-flex justify-content-center align-items-center mt-2">
          <form
            className="login-form p-1 rounded-2 h-50"
            id="loginForm"
            onSubmit={handleSubmit}
          >
            <h2 className="text-center fw-bold">Welcome to EMS</h2>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="submit-btn-cont d-flex flex-column justify-content-center align-items-center">
              <button type="submit" className="btn btn-primary w-50">
                Submit
              </button>
              <p className="register-cont1 mt-3">
                {" Don't have an account?"}
                <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
