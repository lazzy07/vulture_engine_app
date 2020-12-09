import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/index.scss";
import React from "react";
import App from "./App";
import "./scss/app.scss";
import ReactDOM from "react-dom";
import * as serviceWorker from "../serviceWorker";
import { Color, Titlebar } from "custom-electron-titlebar";
import { defaultColors } from "./constants/colors";

new Titlebar({
  backgroundColor: Color.fromHex(defaultColors.IMPORTANT_BACKGROUND_COLOR),
  unfocusEffect: true,
  titleHorizontalAlignment: "center",
  menu: null,
});

const render = () => ReactDOM.render(<App />, document.getElementById("root"));

render();

serviceWorker.register();
