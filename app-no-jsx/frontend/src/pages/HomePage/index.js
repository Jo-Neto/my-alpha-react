import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import StandardHeader from "../../components/headers/StandardHeader";
import LogoutButton from "../../components/buttons/LogoutButton";

function HomePage() {
  return React.createElement("div", {
    className: "page",
    id: "home-page"
  }, React.createElement(StandardHeader, null, React.createElement(LogoutButton, null)), React.createElement("main", {
    id: "home-page-main"
  }, React.createElement("div", {
    id: "profile-picture"
  }), React.createElement("div", {
    id: "profile-info"
  }, React.createElement("h2", {
    id: "username"
  }, "Pedro Cardoso"), React.createElement("p", {
    id: "email"
  }, "pedr\xE3o_brabo@email.com"), React.createElement("p", {
    id: "birthdate"
  }, "Birthdate: 01/01/1900")), React.createElement("div", {
    className: "navigate-buttons"
  }, React.createElement("button", {
    id: "edit-button"
  }, "Edit Profile"))));
}

export default HomePage;