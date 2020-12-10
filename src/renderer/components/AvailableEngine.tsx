import { faBoxOpen, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { defaultColors } from "../constants/colors";
import { EngineItem } from "../interfaces/EngineItem";

interface Props {
  item: EngineItem;
}

export default function AvailableEngine(props: Props) {
  const renderListItems = (items: string[]) => {
    return items.map((ele, index) => {
      return <li key={index}>{ele}</li>;
    });
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: defaultColors.FONT_COLOR,
          width: "100%",
          color: defaultColors.DEFAULT_BACKGROUND_COLOR,
          borderRadius: 10,
          padding: 15,
        }}
      >
        <div>
          <p
            style={{ fontWeight: "bold", fontSize: 24, padding: 0, margin: 0 }}
          >
            Vulture{" "}
            <span style={{ fontSize: 32, fontWeight: "bolder" }}>
              {props.item.version}
            </span>
          </p>
          <p
            style={{
              fontWeight: "bold",
              fontSize: 22,
              padding: 0,
              margin: 0,
              color: defaultColors.IMPORTANT_BACKGROUND_COLOR,
            }}
          >
            {props.item.isNewest ? "New" : undefined}
          </p>
        </div>
        <hr
          color={defaultColors.DEFAULT_BACKGROUND_COLOR}
          style={{ padding: 0, margin: 0 }}
        />
        <div style={{ paddingTop: 10, paddingBottom: 10 }}>
          <p>{props.item.description}</p>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: "bolder" }}>Engine stats</div>
              <ul>
                <li>
                  Render Engine :{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {props.item.rendering_engine}
                  </span>
                </li>
                <li>
                  Physics Engine :{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {props.item.rendering_engine}
                  </span>
                </li>
                <li>
                  Sound Engine :{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {props.item.rendering_engine}
                  </span>
                </li>
              </ul>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: "bolder" }}>Improvements</div>
              <div>
                <ul>{renderListItems(props.item.improvements)}</ul>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: "bolder" }}>Bugfixes</div>
              <div>
                <ul>{renderListItems(props.item.bugfixes)}</ul>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: "bolder" }}>Known Bugs</div>
              <div>
                <ul>{renderListItems(props.item.known_bugs)}</ul>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginTop: 10,
            fontSize: 16,
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
              <div style={{ paddingRight: 10, fontWeight: "bold" }}>
                Already Installed
              </div>
              <FontAwesomeIcon icon={faBoxOpen} />
            </div>
          ) : (
            <div
              style={{
                margin: 5,
                padding: 10,
                cursor: "pointer",
                display: "flex",
                border: `1px solid ${defaultColors.DEFAULT_BACKGROUND_COLOR}`,
              }}
              className="buttonalt"
            >
              <div style={{ paddingRight: 10, fontWeight: "bold" }}>
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
