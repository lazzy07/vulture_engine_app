import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBoxOpen,
  faDownload,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { defaultColors } from "../constants/colors";
import Image from "../img/logo_with_text_g.png";

export default function NavigationBar() {
  const history = useHistory();
  const [active, setActive] = useState<string>("Home");

  const onSelection = (selected: string, navigation: string) => {
    setActive(selected);
    history.push(navigation);
  };

  const renderButton = (
    title: string,
    navigate: string,
    icon: IconDefinition
  ) => {
    return (
      <div
        onClick={() => onSelection(title, navigate)}
        className={active === title ? "selected" : "selectedButton"}
        style={{
          cursor: "pointer",
          width: "100%",
          height: 60,
          display: "flex",
          alignItems: "center",
          paddingLeft: 20,
        }}
      >
        <div>
          <FontAwesomeIcon
            style={{
              fontSize: 20,
            }}
            icon={icon}
          />
        </div>
        <div style={{ paddingLeft: 10, fontSize: 16, fontWeight: "bolder" }}>
          {title}
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        width: "25vw",
        display: "flex",
        flexDirection: "column",
        backgroundColor: defaultColors.IMPORTANT_BACKGROUND_COLOR,
      }}
    >
      <div style={{ paddingTop: 20 }}>
        {renderButton("Home", "/", faHome)}
        {renderButton("Download", "/download", faDownload)}
        {renderButton("Plugins", "/plugins", faBoxOpen)}
      </div>
      <div style={{ display: "flex", flex: 1, alignItems: "flex-end" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flex: 1,
            padding: 10,
          }}
        >
          <img style={{ width: "50%" }} alt="" src={Image} />
          <div style={{ fontSize: 10 }}>by @lazy07</div>
        </div>
      </div>
    </div>
  );
}
