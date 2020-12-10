import { faBackspace, faDownload } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "../components/Button";
import Inputbox from "../components/Inputbox";
import { RELEASE_DATA_URL } from "../constants/urls";
import { InstallerContext } from "../contexts/InstallerContext";
import { EngineItem } from "../interfaces/EngineItem";

interface Props {
  engineVersions: EngineItem[];
}

export default function DownloadEngineScreen(props: Props) {
  const { version } = useParams<{ version: string }>();
  const { setInstalling, fileSize, setFileSize } = useContext(InstallerContext);
  const history = useHistory();

  let currentVersion: EngineItem | undefined;

  for (const i of props.engineVersions) {
    if (i.version === version) {
      currentVersion = i;
    }
  }

  useEffect(() => {
    setInstalling(version);

    Axios.get(RELEASE_DATA_URL(currentVersion!.download.windows))
      .then((response) => {
        console.log(response.data.assets[0].size);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onClick = () => {
    setInstalling("");
    history.push("/download");
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
          onChange={(key, val) => {
            console.log(key, val);
          }}
          id="path"
          title="Install to : "
          value="C:/home"
        />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={onClick} title="Browse" icon={faDownload} />
        </div>
      </div>
      <div style={{ fontWeight: "bolder" }}>Size : {}</div>
      <div style={{ display: "flex" }}>
        <Button
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
