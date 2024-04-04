import { createContext, useEffect, useState } from "react";
import Keycloak from "keycloak-js";

export const UserContext = createContext({ keycloak: null });

export function UserContextProvider(props) {
  const [kc, setKc] = useState();
  const keycloak = new Keycloak({
    url: "http://localhost:8443/",
    realm: "HeraldRealm",
    clientId: "HeraldClient",
  });

  useEffect(() => {
    keycloak
      .init({
        onLoad: "login-required",
        KeycloakResponseType: "code",
        pkceMethod: "S256",
        redirectUri: "https://localhost:5173/",
        checkLoginIframe: false,
      })
      .then(
        (auth) => {
          if (!auth) {
            window.location.reload();
          } else {
            console.info("Authenticated");
            console.log("auth", auth);
            console.log("Keycloak", keycloak);
            keycloak.onTokenExpired = () => {
              console.log("token expired");
            };
            setKc(keycloak);
          }
        },
        () => {
          console.error("Authenticated Failed");
        }
      );
  }, []);

  const values = {
    keycloak: kc,
  };

  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
}
