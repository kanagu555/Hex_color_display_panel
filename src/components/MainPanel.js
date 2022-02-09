import React, { useState } from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import "./MainPanel.css";
import Footer from "./Footer";

const MainPanel = () => {
  const [leftColor, setLeftColor] = useState("");

  const onLeft = (e) => {
    console.log(e);
    setLeftColor(e);
  };

  return (
    <div>
      <div className="main-container">
        <LeftPanel onLeft={onLeft} />
        <RightPanel onRight={leftColor} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainPanel;
