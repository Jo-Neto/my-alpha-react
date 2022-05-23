import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StandardHeader from "../../components/headers/StandardHeader";
import "./style.css";

function RegisterPage() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
  }

  return React.createElement("div", {
    className: "page",
    id: "register-page"
  }, React.createElement(StandardHeader, null), React.createElement("main", null, React.createElement("h2", null, "Register"), React.createElement("form", {
    id: "register-form"
  }, React.createElement("div", {
    className: "register-input-container"
  }, React.createElement("input", {
    className: "reg-input",
    type: "text",
    placeholder: "Full Name",
    onChange: e => setFullname(e.target.value)
  }), React.createElement("input", {
    className: "reg-input",
    type: "text",
    placeholder: "Username",
    onChange: e => setUsername(e.target.value)
  }), React.createElement("input", {
    className: "reg-input",
    type: "password",
    placeholder: "Password",
    onChange: e => setPassword(e.target.value)
  }), React.createElement("input", {
    className: "reg-input",
    type: "password",
    placeholder: "Confirm Password",
    onChange: e => setConfirmPassword(e.target.value)
  }), React.createElement("input", {
    className: "reg-input",
    type: "email",
    placeholder: "Email",
    onChange: e => setEmail(e.target.value)
  }), React.createElement("input", {
    className: "reg-input",
    type: "text",
    id: "reg-birthday",
    placeholder: "Birthday",
    onChange: e => setBirthday(e.target.value),
    onFocus: e => e.target.type = "date",
    onBlur: e => e.target.type = "text"
  })), React.createElement("div", {
    className: "button-container"
  }, React.createElement("button", {
    id: "send"
  }, "Register")), React.createElement("p", null))));
}

export default RegisterPage;