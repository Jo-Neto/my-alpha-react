import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const StandardHeader = ({
  children
}) => {
  return React.createElement("header", {
    id: "standard-header"
  }, 
  React.createElement(NavLink, {
    to: "/"
  }, 
  React.createElement("p", {
    id: "profiler-header"
  }, "Profiler")), children);
};

export default StandardHeader;