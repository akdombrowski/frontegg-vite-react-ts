import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import fronteggLogo from "/frontegg.svg";
import "./App.css";

import { useAuth, useLoginWithRedirect, ContextHolder } from "@frontegg/react";

function App() {
  const [count, setCount] = useState(0);

  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();
  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  return (
    <>
      <div>
        <a
          href="https://vite.dev"
          target="_blank"
        >
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
        <a
          href="https://frontegg.com"
          target="_blank"
        >
          <img
            src={fronteggLogo}
            className="logo frontegg"
            alt="Frontegg logo"
          />
        </a>
      </div>
      <h1>Vite + React + Frontegg</h1>
      <div className="card">
        <div className="inlineEl">
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <div className="inlineEl">
          {isAuthenticated ? (
            <>
              <button onClick={() => logout()}>Logout</button>
              <p>
                You've successfully logged in with
                <br />
                {user?.email}!
              </p>
            </>
          ) : (
            <>
              <button onClick={() => loginWithRedirect()}>Login</button>

              <a
                href="https://developers.frontegg.com/guides/getting-started/home"
                target="_blank"
              >
                <p>Add Authentication with Frontegg</p>
              </a>
            </>
          )}
        </div>
      </div>
      <p className="read-the-docs">Click on the Vite, React, or Frontegg logos to learn more</p>
    </>
  );
}

export default App;
