import React, { useEffect, useRef, useState } from "react";
import { TfiClose } from "react-icons/tfi";
import "./_microphone.scss";
import $ from "jquery";

const Microphone = ({ searchMicActive, setSearchMicActive }) => {
  const microphoneRef = useRef();

  return (
    <div className="microphone" ref={microphoneRef}>
      <div className="microphone__blur-background"></div>
      <div className="microphone__content">
        <div>Microphone</div>
        <div
          className="microphone__close"
          onClick={() => {
            setSearchMicActive(false);
          }}
        >
          <TfiClose size="20" />
        </div>
      </div>
    </div>
  );
};

export default Microphone;
