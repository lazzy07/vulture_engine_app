import React from "react";
import "../scss/inputbox.scss";

interface Props {
  title: string;
  onChange: (key: string, val: string) => void;
  id: string;
  value: string;
  disabled?: boolean;
}

export default function Inputbox(props: Props) {
  return (
    <div style={{ display: "flex", marginTop: 10, marginBottom: 10 }}>
      <div style={{ flex: 1 }}>{props.title}</div>
      <input
        disabled={props.disabled}
        style={{ flex: 5 }}
        value={props.value}
        id={props.id}
        onChange={(e) => props.onChange(props.id, e.target.value)}
        className="inputtextbox"
        type="text"
      />
    </div>
  );
}
