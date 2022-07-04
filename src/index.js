import React from "react";
import ReactDOM from "react-dom";
import { PadBox } from "@bedrock-layout/padbox";
import Center from "@bedrock-layout/center";
import "@bedrock-layout/css-reset/lib/reset.css";
import MenuBar from "./MenuBar";
import App from "./App";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <PadBox
      as={Center}
      padding="md"
      maxWidth="85rem"
      style={{ fontFamily: "sans-serif" }}
    >
      <MenuBar />
    </PadBox>
  </React.StrictMode>,
  rootElement
);
