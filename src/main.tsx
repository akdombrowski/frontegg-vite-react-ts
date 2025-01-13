import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { FronteggProvider } from "@frontegg/react";

const contextOptions = {
  baseUrl: __FRONTEGG_BASE_URL__,
  clientId: __FRONTEGG_CLIENT_ID__,
  appId: __FRONTEGG_APP_ID__,
};

const authOptions = {
  keepSessionAlive: true,
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FronteggProvider
      contextOptions={contextOptions}
      hostedLoginBox={true}
      authOptions={authOptions}
    >
      <App />
    </FronteggProvider>
  </StrictMode>,
);
