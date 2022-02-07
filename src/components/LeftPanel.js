import React, { useRef, useState } from "react";
import ColorTop from "./colorBorder/ColorTop";
import ColorBottom from "./colorBorder/ColorBottom";
import "./LeftPanel.css";

const LeftPanel = (props) => {
  const [error, setError] = useState("");

  const textInput = useRef();

  const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/g;

  const onSubmit = () => {
    const hexValue = textInput.current.value.trim();
    const condition = regex.test(hexValue);

    if (condition) {
      props.onLeft(hexValue);
      setError("");
    } else {
      setError("Enter Valid Hex color code");
    }
  };

  return (
    <div className="left-container">
      <ColorTop />
      <div className="flex-input">
        <input
          type="text"
          ref={textInput}
          className="form-control"
          placeholder="Enter valid Hex code value"
          id="validationServerUsername"
        />
        <span id="error" className="span-error">
          {error}
        </span>
        <button onClick={onSubmit} className="btn btn-primary btn-select">
          Submit
        </button>
      </div>
      <ColorBottom />
    </div>
  );
};

export default LeftPanel;
