import { app, BrowserWindow } from "electron";
import * as Splashscreen from "@trodi/electron-splashscreen";
import fs from "fs";
import Path from "path";

declare var MAIN_WINDOW_WEBPACK_ENTRY: any;
let store: any;
if (require("electron-squirrel-startup")) {
  app.quit();
}

let mainWindow: any;

const mainOptions: Electron.BrowserWindowConstructorOptions = {
  minHeight: 600,
  minWidth: 800,
  frame: false,
  transparent: true,
  webPreferences: {
    nodeIntegration: true,
    webSecurity: false,
  },
};

const initializeApp = () => {
  console.log("Current environment: " + process.env.NODE_ENV);
  const DEFAULT_APP_DATA_PATH = Path.join(
    app.getPath("appData"),
    "vulture_engine_2"
  );
  if (!fs.existsSync(DEFAULT_APP_DATA_PATH)) {
    console.log("DEFAULT_APP_PATH_CREATED");
    fs.mkdirSync(DEFAULT_APP_DATA_PATH, { recursive: true });
  }

  const config: Splashscreen.Config = {
    windowOpts: mainOptions,
    templateUrl: `${__dirname}/loading/loading.html`,
    splashScreenOpts: {
      width: 600,
      height: 360,
      backgroundColor: "#20292b",
    },
  };
  mainWindow = Splashscreen.initSplashScreen(config);
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.webContents.openDevTools({ mode: "detach" });
};

const createWindow = () => {
  initializeApp();

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

export { app, store };
