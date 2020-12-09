import React from "react";
import { MemoryRouter, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import { Routes } from "./routes";
import DownloadScreen from "./screens/DownloadScreen";
import MainScreen from "./screens/MainScreen";

export default function App() {
  return (
    <MemoryRouter>
      <div style={{ display: "flex", height: "100%" }}>
        <NavigationBar />
        <div style={{ width: "100%" }}>
          <Switch>
            <Route exact path={Routes.mainScreen}>
              <MainScreen />
            </Route>
            <Route exact path={Routes.downloadScreen}>
              <DownloadScreen />
            </Route>
          </Switch>
        </div>
      </div>
    </MemoryRouter>
  );
}
