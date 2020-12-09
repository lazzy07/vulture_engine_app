import { faBoxOpen, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { defaultColors } from "../constants/colors";

interface Props {
  item: EngineItem;
}

export default function AvailableEngine(props: Props) {
  return (
    <div>
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
            {props.item.version}
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
          {props.item.isInstalled ? (
            <div
              style={{
                padding: 5,
                cursor: "pointer",
                display: "flex",
              }}
            >
              <div
                style={{ fontSize: 12, paddingRight: 10, fontWeight: "bold" }}
              >
                Already Installed
              </div>
              <FontAwesomeIcon icon={faBoxOpen} />
            </div>
          ) : (
            <div
              style={{
                padding: 5,
                cursor: "pointer",
                display: "flex",
              }}
              className="buttonalt"
            >
              <div
                style={{ fontSize: 12, paddingRight: 10, fontWeight: "bold" }}
              >
                Download & Install
              </div>
              <FontAwesomeIcon icon={faDownload} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
