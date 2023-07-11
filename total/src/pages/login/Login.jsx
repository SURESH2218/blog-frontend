import React, { useContext, useRef } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import axios from "axios";
const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      // console.log(err);
    }
  };
  console.log(user);
  console.log(isFetching);

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginform" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your email..."
          ref={userRef}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password"
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="registerButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
};

export default Login;
