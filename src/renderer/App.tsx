import React, { useState } from "react";
import { MemoryRouter, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import InstallerContextAPI from "./contexts/InstallerContext";
import { EngineItem } from "./interfaces/EngineItem";
import { Routes } from "./routes";
import DownloadEngineScreen from "./screens/DownloadEngineScreen";
import DownloadScreen from "./screens/DownloadScreen";
import MainScreen from "./screens/MainScreen";
import { EngineData } from "./settings/EngineData";

export default function App() {
  const [engineVersions, setEngineVersions] = useState<EngineItem[]>([]);
  const engineData = new EngineData();
  engineData.loadEngineData();

  return (
    <MemoryRouter>
      <div style={{ display: "flex", height: "100%" }}>
        <NavigationBar />
        <div style={{ width: "100%" }}>
          <InstallerContextAPI>
            <Switch>
              <Route exact path={Routes.mainScreen}>
                <MainScreen />
              </Route>
              <Route exact path={Routes.downloadScreen}>
                <DownloadScreen
                  engineVersions={engineVersions}
                  setEngineVersions={setEngineVersions}
                />
              </Route>
              <Route exact path={Routes.downloadEngine}>
                <DownloadEngineScreen engineVersions={engineVersions} />
              </Route>
            </Switch>
          </InstallerContextAPI>
        </div>
      </div>
    </MemoryRouter>
  );
}
