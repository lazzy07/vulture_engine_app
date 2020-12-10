import { faBackspace, faDownload } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "../components/Button";
import Inputbox from "../components/Inputbox";
import { DEFAULT_APP_DATA_PATH, RELEASE_DATA_URL } from "../constants/urls";
import { InstallerContext } from "../contexts/InstallerContext";
import { EngineItem } from "../interfaces/EngineItem";
import Path from "path";
import { remote } from "electron";
const { dialog } = remote;

interface Props {
  engineVersions: EngineItem[];
}

export default function DownloadEngineScreen(props: Props) {
  const { version } = useParams<{ version: string }>();
  const {
    installing,
    setInstalling,
    fileSize,
    setFileSize,
    path,
    setPath,
    isInstalling,
    startInstalling,
  } = useContext(InstallerContext);
  const history = useHistory();
  const [currentState, setCurrentState] = useState<string>("loading");
  let currentVersion: EngineItem | undefined;
  let installationPath = Path.join(DEFAULT_APP_DATA_PATH, "engines", version);

  for (const i of props.engineVersions) {
    if (i.version === version) {
      currentVersion = i;
    }
  }

  useEffect(() => {
    setInstalling(version);
    setPath(installationPath);
    Axios.get(RELEASE_DATA_URL(currentVersion!.download.windows))
      .then((response) => {
        setCurrentState("done");
        setFileSize(response.data.size);
      })
      .catch((err) => {
        setCurrentState("error");
        console.log(err);
      });
  }, []);

  const onClick = () => {
    setInstalling("");
    history.push("/download");
  };

  const openFolder = () => {
    dialog.showOpenDialog({
      title: "Choose folder to install",
      buttonLabel: "Select Folder",
      defaultPath: installationPath,
      properties: ["createDirectory", "openDirectory"],
    });
  };

  return (
    <div style={{ padding: 30 }}>
      <h3 style={{ fontWeight: "bolder", fontSize: 32 }}>
        Install Vulture <span style={{ fontSize: 42 }}>{version}</span>
      </h3>
      <div style={{ paddingTop: 10, paddingBottom: 10 }}>
        {currentVersion!.description}
      </div>
      <div style={{ paddingTop: 10 }}>
        Render Engine :{" "}
        <span style={{ fontWeight: "bold" }}>
          {currentVersion?.rendering_engine}
        </span>
      </div>
      <div>
        Physics Engine :{" "}
        <span style={{ fontWeight: "bold" }}>
          {currentVersion?.rendering_engine}
        </span>
      </div>
      <div style={{ paddingBottom: 30 }}>
        Sound Engine :{" "}
        <span style={{ fontWeight: "bold" }}>
          {currentVersion?.rendering_engine}
        </span>
      </div>
      <div style={{ paddingTop: 10, paddingBottom: 30, paddingRight: 40 }}>
        <Inputbox
          disabled={isInstalling}
          onChange={(_, val) => {
            setPath(val);
          }}
          id="path"
          title="Install to : "
          value={path}
        />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            disabled={isInstalling}
            onClick={openFolder}
            title="Browse"
            icon={faDownload}
          />
        </div>
      </div>
      <div style={{ fontWeight: "bolder", paddingTop: 20, paddingBottom: 20 }}>
        File size :
        <span style={{ fontWeight: "bolder", fontSize: 22 }}>
          {" "}
          {currentState === "loading"
            ? "Fetching data.."
            : currentState === "error"
            ? "Error, please check your internet connection"
            : (fileSize / (1024 * 1024)).toFixed(2) + " MB"}
        </span>
      </div>
      <div style={{ display: "flex" }}>
        <Button
          disabled={currentState !== "done" || isInstalling}
          onClick={onClick}
          title="Download and Install"
          icon={faDownload}
        />
        <div style={{ paddingLeft: 10 }}>
          <Button onClick={onClick} title="Cancel" icon={faBackspace} />
        </div>
      </div>
    </div>
  );
}
