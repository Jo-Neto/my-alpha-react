import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth";
import "./style.css";

function LoginPage() {
  const {
    login,
    error
  } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Submit", {
      username,
      password
    });
    login(username, password);
  };

  return React.createElement("div", {
    className: "page",
    id: "login-page"
  }, React.createElement("h1", null, "Profiler"), React.createElement("form", {
    id: "login-form"
  }, React.createElement("input", {
    className: "login-input",
    type: "text",
    id: "username",
    placeholder: "Username",
    onChange: e => setUsername(e.target.value)
  }), React.createElement("input", {
    className: "login-input",
    type: "password",
    id: "password",
    placeholder: "Password",
    onChange: e => setPassword(e.target.value)
  }), React.createElement("button", {
    type: "submit",
    id: "login-button",
    onClick: handleSubmit
  }, "Login"), React.createElement("p", null, "Don't have an account? ", React.createElement(NavLink, {
    to: "/register"
  }, " Register ")), error && React.createElement("p", {
    className: "error"
  }, error)));
}

export default LoginPage;