import React from 'react'
import Image from "../img/logo_with_text_g.png";

export default function MainScreen() {
  return (
    <div>
      <div style={{ width: "40vw", display: "flex", justifyContent: "center" }}>
        <img draggable={false} style={{ width: "100%" }} src={Image} alt="" />
      </div>
    </div>
  )
}
