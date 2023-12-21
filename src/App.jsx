import React from "react";
import ModuleOne from "./components/moduleOne/ModuleOne";
import ModuleTwo from "./components/moduleTwo/ModuleTwo";
import { Auth0Provider } from "@auth0/auth0-react";
import { useEffect } from "react";

export default function App() {
  
  return (
    <div>
      <Auth0Provider
      domain="dev-up4t1zkogj5p1jky.us.auth0.com"
      clientId="R4hrdlS4rbRMROZQflerntf8nZ6Mo3zW"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ModuleOne />
      <ModuleTwo />
    </Auth0Provider>
    </div>
  )
}
