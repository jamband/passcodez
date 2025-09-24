import "./app.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/app";

const container = document.getElementById("app");
if (container === null) {
  throw new Error("#app element does not exist.");
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
