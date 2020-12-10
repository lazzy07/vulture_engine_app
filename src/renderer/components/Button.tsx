import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { defaultColors } from "../constants/colors";

interface Props {
  onClick: () => void;
  title: string;
  icon?: IconDefinition;
  disabled?: boolean;
}

export default function Button(props: Props) {
  return (
    <div
      className={props.disabled ? "" : "button"}
      onClick={!props.disabled ? props.onClick : () => {}}
      style={{
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        border: "1px solid " + defaultColors.FONT_COLOR,
        display: "inline-block",
        fontWeight: "bold",
        cursor: "pointer",
        opacity: props.disabled ? 0.4 : 1,
      }}
    >
      {props.icon && (
        <FontAwesomeIcon style={{ paddingRight: 5 }} icon={props.icon} />
      )}
      {props.title}
    </div>
  );
}
