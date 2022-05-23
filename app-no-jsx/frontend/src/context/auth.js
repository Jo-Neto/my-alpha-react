import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { validateUsername } from "../modules/inputVerification";
export const AuthContext = createContext();
export const AuthProvider = ({
  children
}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = (username, password) => {
    if (validateUsername(username) && password.length > 0) {
      setIsLoading(true);
      const loggedUser = {
        username,
        id: "1",
        name: "Pedro Silva",
        email: "pedrosilva@email.com",
        password: "123123"
      };
      localStorage.setItem("user", JSON.stringify(loggedUser));

      if (password === loggedUser.password) {
        setUser(loggedUser);
        navigate("/");
        setError(null);
      } else {
        setError("Wrong password");
      }
    }
  };

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
      setIsLoading(false);
    }
  }, []);

  const logout = () => {
    console.log("Logout");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return React.createElement(AuthContext.Provider, {
    value: {
      authenticated: !!user,
      isLoading,
      error,
      user,
      login,
      logout
    }
  }, children);
};