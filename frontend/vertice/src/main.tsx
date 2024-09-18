import { StyledEngineProvider } from "@mui/material";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./layout/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StyledEngineProvider injectFirst>
    <App />
  </StyledEngineProvider>
);
