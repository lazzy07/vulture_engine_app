import React from "react";
import EngineEntity from "../components/EngineEntity";
import { defaultColors } from "../constants/colors";
import { EngineData } from "../settings/EngineData";

export default function MainScreen() {
  const renderInstalledEngines = () => {
    const engines = EngineData.installedEngines;
    return engines.map((ele, index) => {
      return (
        <div key={index} style={{ paddingRight: 10 }}>
          <EngineEntity item={ele} />
        </div>
      );
    });
  };

  return (
    <div>
      <div
        style={{
          padding: 20,
          paddingTop: 30,
        }}
      >
        <h5>Available Engine Versions</h5>
        <hr color={defaultColors.FONT_COLOR} />
        <div style={{ marginTop: 25 }}>{renderInstalledEngines()}</div>
        <h5 style={{ paddingTop: 50 }}>Opened Projects</h5>
        <hr color={defaultColors.FONT_COLOR} />
        <div></div>
      </div>
    </div>
  );
}
