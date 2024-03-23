import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/FirebaseAuth";

const Login = () => {
  const navigateHome = useNavigate();
  const [userRegister, setUserRegister] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUserRegister({ ...userRegister, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userRegister.email || !userRegister.password) {
      toast.error("all fields are required");
    } else {
      signInWithEmailAndPassword(
        auth,
        userRegister.email,
        userRegister.password
      )
        .then(async (res) => {
          toast.success("Login Successfull");
          navigateHome("/");
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  };
  return (
    <>
      <section className="section">
        <div className="signin">
          <div className="content">
            <h2>Login</h2>

            <div className="form">
              <div className="inputBox">
                <input
                  type="email"
                  required
                  name="email"
                  autoComplete="off"
                  value={userRegister.email}
                  onChange={handleChange}
                />{" "}
                <i>email</i>
              </div>

              <div className="inputBox">
                <input
                  type="password"
                  required
                  name="password"
                  autoComplete="off"
                  value={userRegister.password}
                  onChange={handleChange}
                />{" "}
                <i>Password</i>
              </div>

              <div className="links">
                {" "}
                <a href="#">don't have an account ?</a>{" "}
                <Link to="/register">
                  <button>Register</button>
                </Link>
              </div>

              <div className="inputBox">
                <input type="submit" value="Login" onClick={handleSubmit} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
