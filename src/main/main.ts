import { app, BrowserWindow } from "electron";

declare var MAIN_WINDOW_WEBPACK_ENTRY: any;
let store: any;
if (require("electron-squirrel-startup")) {
  app.quit();
}

let mainWindow: any;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 650,
    minWidth: 500,
    minHeight: 300,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  mainWindow.webContents.openDevTools({ mode: "detach" });

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
