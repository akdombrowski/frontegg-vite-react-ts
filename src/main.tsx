import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { FronteggProvider } from "@frontegg/react";

const contextOptions = {
  baseUrl: import.meta.env.VITE_FRONTEGG_BASE_URL,
  clientId: import.meta.env.VITE_FRONTEGG_CLIENT_ID,
  appId: import.meta.env.VITE_FRONTEGG_APP_ID,
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
