import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

//import App from "./App";
//import Fileinsert from "./Fileinput.js";
import Valuebased from "./Valuebased.js";
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Valuebased />
  </StrictMode>
);
