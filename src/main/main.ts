import { app, BrowserWindow } from "electron";
import * as Splashscreen from "@trodi/electron-splashscreen";

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
