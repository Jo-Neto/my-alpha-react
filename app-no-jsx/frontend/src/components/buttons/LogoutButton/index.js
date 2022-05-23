import { useNavigate } from "react-router-dom";
import "./style.css";

function LogoutButton(props) {
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return React.createElement("button", {
    id: "logout-button",
    onClick: handleSubmit
  }, "Logout");
}

export default LogoutButton;