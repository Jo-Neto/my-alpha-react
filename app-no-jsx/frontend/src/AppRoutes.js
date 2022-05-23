import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import EditProfilePage from "./pages/EditProfilePage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider, AuthContext } from "./context/auth";

const AppRoutes = () => {
  const Private = ({
    children
  }) => {
    const {
      authenticated,
      isLoading
    } = useContext(AuthContext);

    if (isLoading) {
      return React.createElement("div", {
        className: "loading"
      }, "Loading...");
    }

    if (!authenticated) {
      return React.createElement(Navigate, {
        to: "/login"
      });
    }

    return children;
  };

  const LoginPrivate = ({
    children
  }) => {
    const {
      authenticated,
      isLoading
    } = useContext(AuthContext);

    if (isLoading) {
      return React.createElement("div", {
        className: "loading"
      }, "Loading...");
    }

    if (authenticated) {
      return React.createElement(Navigate, {
        to: "/"
      });
    }

    return children;
  };

  return React.createElement("div", null, React.createElement(Router, null, React.createElement(AuthProvider, null, React.createElement(Routes, null, React.createElement(Route, {
    exact: true,
    path: "/",
    element: React.createElement(Private, null, React.createElement(HomePage, null))
  }), React.createElement(Route, {
    exact: true,
    path: "/login",
    element: React.createElement(LoginPrivate, null, React.createElement(LoginPage, null))
  }), React.createElement(Route, {
    exact: true,
    path: "/register",
    element: React.createElement(LoginPrivate, null, React.createElement(RegisterPage, null))
  }), React.createElement(Route, {
    exact: true,
    path: "/edit-profile",
    element: React.createElement(Private, null, React.createElement(EditProfilePage, null))
  })))));
};

export default AppRoutes;