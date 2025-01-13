import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the
  // `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // vite config
    define: {
      __FRONTEGG_BASE_URL__: JSON.stringify(env.FRONTEGG_BASE_URL),
      __FRONTEGG_CLIENT_ID__: JSON.stringify(env.FRONTEGG_CLIENT_ID),
      __FRONTEGG_APP_ID__: JSON.stringify(env.FRONTEGG_APP_ID),
    },
    plugins: [react()],
  };
});
