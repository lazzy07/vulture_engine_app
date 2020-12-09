import React from "react";
import EngineEntity from "../components/EngineEntity";
import { defaultColors } from "../constants/colors";

export default function MainScreen() {
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
        <div style={{ marginTop: 25 }}>
          <EngineEntity />
        </div>
      </div>
    </div>
  );
}
