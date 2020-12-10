import React, { useState } from "react";

export const InstallerContext = React.createContext<{
  installing: string;
  setInstalling: (value: string) => void;
  fileSize: number;
  setFileSize: (value: number) => void;
  path: string;
  setPath: (value: string) => void;
  isInstalling: boolean;
  startInstalling: () => void;
}>({
  installing: "",
  setInstalling: () => {},
  fileSize: 0,
  setFileSize: () => {},
  path: "",
  isInstalling: false,
  setPath: () => {},
  startInstalling: () => {},
});

export default function InstallerContextAPI({ children }) {
  const [installing, setInstalling] = useState<string>("");
  const [fileSize, setFileSize] = useState<number>(0);
  const [path, setPath] = useState<string>("");
  const [isInstalling, setIsInstalling] = useState(false);

  const startInstalling = () => {};

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
      }}
    >
      {children}
    </InstallerContext.Provider>
  );
}
