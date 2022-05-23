import "./App.css";
import AppRoutes from "./AppRoutes";

function App() {
  return React.createElement("div", {
    className: "app"
  }, React.createElement(AppRoutes, null));
}
export default App;