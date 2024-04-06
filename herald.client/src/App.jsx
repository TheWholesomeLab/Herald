import { useContext } from "react";
//import Keycloak from "keycloak-js";
import { UserContext } from "./contexts/userContext";
import "./App.css";

function App() {
  const { keycloak } = useContext(UserContext);

  console.log(keycloak);

  return (
    <div>
      <h1 id="tabelLabel">HERALD</h1>
      <p>Connected as {keycloak && keycloak.idTokenParsed.given_name} {keycloak && keycloak.idTokenParsed.family_name}</p>
    </div>
  );
}

export default App;
