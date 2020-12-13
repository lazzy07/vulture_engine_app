import React, { useContext, useState } from "react";
import Inputbox from "../components/Inputbox";
import { DEFAULT_PROJECTS_PATH } from "../constants/urls";
import { ProjectContextData } from "../contexts/ProjectContext";
import { Project } from "../interfaces/Project";
import { defaultColors } from "../constants/colors";
import Button from "../components/Button";
import { faBackspace, faBoxOpen } from "@fortawesome/free-solid-svg-icons";

export default function CreateNewProjectScreen() {
  const { selectedEngine } = useContext(ProjectContextData);

  const [isExists, setIsExists] = useState<boolean>(true);
  const [projectData, setProjectData] = useState<Project>({
    created: Date.now(),
    engine: selectedEngine!,
    name: "Untitled",
    path: DEFAULT_PROJECTS_PATH,
    type: "game",
  });

  const setProjData = (key: string, val: string) => {
    setProjectData({
      ...projectData,
      [key]: val,
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <div
        style={{
          fontSize: 34,
          fontWeight: "bold",
          paddingBottom: 30,
          paddingTop: 30,
        }}
      >
        Create a new Project
      </div>
      <div style={{ fontSize: 23, paddingBottom: 20 }}>
        Selected Engine:{" "}
        <span style={{ fontWeight: "bolder", fontSize: 28 }}>
          {selectedEngine?.version}
        </span>
      </div>
      <div style={{ paddingRight: 50 }}>
        <div>
          <Inputbox
            title="Project Name"
            id={"name"}
            onChange={(key, val) => {
              setProjData(key, val);
            }}
            value={projectData.name}
          />
          {isExists && (
            <div
              style={{
                color: defaultColors.ERROR_COLOR,
                textAlign: "end",
                padding: 0,
                margin: 0,
                paddingBottom: 10,
                paddingRight: 20,
              }}
            >
              Already Exists!
            </div>
          )}
        </div>
        <div>
          <Inputbox
            id="path"
            onChange={(key, val) => {
              setProjData(key, val);
            }}
            title={"Project Path"}
            value={projectData.path}
          />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button title="Browse" onClick={() => {}} />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ paddingRight: 10 }}>
            <Button
              disabled={isExists}
              title="Create Project"
              icon={faBoxOpen}
              onClick={() => {}}
            />
          </div>
          <div>
            <Button title="Cancel" icon={faBackspace} onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
}
