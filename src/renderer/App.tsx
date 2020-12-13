import React, { useState } from "react";
import { MemoryRouter, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import InstallerContextAPI from "./contexts/InstallerContext";
import ProjectContext from "./contexts/ProjectContext";
import { EngineItem } from "./interfaces/EngineItem";
import { Routes } from "./routes";
import CreateNewProjectScreen from "./screens/CreateNewProjectScreen";
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
        <ProjectContext>
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
                <Route exact path={Routes.newProject}>
                  <CreateNewProjectScreen />
                </Route>
              </Switch>
            </InstallerContextAPI>
          </div>
        </ProjectContext>
      </div>
    </MemoryRouter>
  );
}
