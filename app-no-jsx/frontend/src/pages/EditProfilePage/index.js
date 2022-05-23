import { PositiveButton, NegativeButton } from "../../components/exporterOfComponents";
import "./style.css";

function App() {
  return React.createElement(React.Fragment, null, React.createElement("h1", null, "Edit Profile page"), React.createElement(NegativeButton, {
    path: "/home",
    label: "Voltar pra home"
  }), React.createElement(NegativeButton, {
    path: "/home",
    label: "Excluir conta"
  }), React.createElement(PositiveButton, {
    path: "/home",
    label: "Salvar altera\xE7\xF5es"
  }));
}

export default App;