import React, { useState } from "react";
import https from "https";
import fs from "fs";
import Path from "path";
import Zip from "extract-zip";
import { remote } from "electron";
import { useHistory } from "react-router-dom";
import { EngineData } from "../settings/EngineData";
import { EngineItem } from "../interfaces/EngineItem";
const { dialog } = remote;

export const InstallerContext = React.createContext<{
  installing: string;
  setInstalling: (value: string) => void;
  fileSize: number;
  setFileSize: (value: number) => void;
  path: string;
  setPath: (value: string) => void;
  isInstalling: boolean;
  startInstalling: (url: string, fileName: string) => void;
  downloadedDataSize: number;
  setEngine: (engine: EngineItem) => void;
}>({
  installing: "",
  setInstalling: () => {},
  fileSize: 0,
  setFileSize: () => {},
  path: "",
  isInstalling: false,
  setPath: () => {},
  startInstalling: (_: string, __: string) => {},
  downloadedDataSize: 0,
  setEngine: (_: EngineItem) => {},
});

export default function InstallerContextAPI({ children }) {
  const [installing, setInstalling] = useState<string>("");
  const [fileSize, setFileSize] = useState<number>(0);
  const [path, setPath] = useState<string>("");
  const [isInstalling, setIsInstalling] = useState(false);
  const [downloadedDataSize, setDownloadDataSize] = useState(0);
  const history = useHistory();
  const [engine, setEngine] = useState<EngineItem>();

  const startInstalling = (url: string, fileName: string) => {
    setIsInstalling(true);
    const filePath = Path.join(path, fileName);
    let file = fs.createWriteStream(filePath);
    https.get(url, (res) => {
      if (res.statusCode === 302) {
        https.get(res.headers.location!, (response) => {
          response.pipe(file);
          let completedLength = 0;
          response.on("data", (chunk) => {
            completedLength += chunk.length;
            setDownloadDataSize(completedLength);
          });
        });
      }

      file
        .on("finish", () => {
          file.close();
          Zip(filePath, { dir: path })
            .then(async (_) => {
              console.log("Completed");
              setIsInstalling(false);

              const engieData = new EngineData();
              const lastOcc = filePath.lastIndexOf(".zip");
              const fp = filePath.substring(0, lastOcc);

              engieData.insertNewEngine(engine!, fp);

              await dialog.showMessageBox(remote.getCurrentWindow(), {
                title: "Installation complete",
                message: "Installation completed successfully",
              });
              setInstalling("");
              history.push("/download");
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .on("error", (err) => {
          fs.unlink(filePath, (error) => {
            console.log(error);
          });
          console.log(err);
        });
    });
  };

  return (
    <InstallerContext.Provider
      value={{
        installing,
        isInstalling,
        setInstalling,
        fileSize,
        setFileSize,
        startInstalling,
        path,
        setPath,
        downloadedDataSize,
        setEngine,
      }}
    >
      {children}
    </InstallerContext.Provider>
  );
}
