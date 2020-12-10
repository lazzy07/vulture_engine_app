import React, { useState } from "react";

export const InstallerContext = React.createContext<{
  installing: string;
  setInstalling: (value: string) => void;
  fileSize: number;
  setFileSize: (value: number) => void;
}>({
  installing: "",
  setInstalling: () => {},
  fileSize: 0,
  setFileSize: () => {},
});

export default function InstallerContextAPI({ children }) {
  const [installing, setInstalling] = useState<string>("");
  const [fileSize, setFileSize] = useState<number>(0);

  return (
    <InstallerContext.Provider
      value={{ installing, setInstalling, fileSize, setFileSize }}
    >
      {children}
    </InstallerContext.Provider>
  );
}
