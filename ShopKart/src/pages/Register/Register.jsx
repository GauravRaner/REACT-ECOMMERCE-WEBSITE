import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/FirebaseAuth";

const Register = () => {
  const navigateLogin = useNavigate();
  const [userRegister, setUserRegister] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserRegister({ ...userRegister, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !userRegister.username ||
      !userRegister.email ||
      !userRegister.password
    ) {
      toast.error("all fields are required");
    } else {
      toast.success("Registration Successfull");
      createUserWithEmailAndPassword(
        auth,
        userRegister.email,
        userRegister.password
      )
        .then(async (res) => {
          const user = res.user;
          await updateProfile(user, { displayName: userRegister.username });
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  };

  return (
    <>
      <section className="section">
        <div className="register">
          <div className="content">
            <h2>Register</h2>

            <div className="form">
              <div className="inputBox">
                <input
                  type="text"
                  required
                  name="username"
                  autoComplete="off"
                  value={userRegister.username}
                  onChange={handleChange}
                />{" "}
                <i>Username</i>
              </div>

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
                <a href="#">already have an account ?</a>{" "}
                <Link to="/login">
                  <button>Login</button>
                </Link>
              </div>

              <div className="inputBox">
                <input type="submit" value="Register" onClick={handleSubmit} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
