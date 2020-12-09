import React from "react";
import { defaultColors } from "../constants/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "../scss/button.scss";

export default function EngineEntity() {
  return (
    <div
      style={{
        backgroundColor: defaultColors.FONT_COLOR,
        height: "100px",
        width: "250px",
        color: defaultColors.DEFAULT_BACKGROUND_COLOR,
        borderRadius: 10,
        padding: 10,
      }}
    >
      <p style={{ fontWeight: "bold", fontSize: 18, padding: 0, margin: 0 }}>
        Vulture{" "}
        <span style={{ fontSize: 26, fontWeight: "bolder" }}>
          2.1.2-rc Beta
        </span>
      </p>
      <hr
        color={defaultColors.DEFAULT_BACKGROUND_COLOR}
        style={{ padding: 0, margin: 0 }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginTop: 10,
          fontSize: 18,
        }}
      >
        <div
          style={{
            padding: 5,
            cursor: "pointer",
            display: "flex",
          }}
          className="buttonalt"
        >
          <div style={{ fontSize: 12, paddingRight: 10, fontWeight: "bold" }}>
            Add New Project
          </div>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div
          className="buttonalt"
          style={{ padding: 5, cursor: "pointer", display: "flex" }}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>
      </div>
    </div>
  );
}
