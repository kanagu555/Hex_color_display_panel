import React from "react";
import './RightPanel.css'

const RightPanel = (props) => {
    return (
        
        <div className="right-container" style={{backgroundColor:`${props.onRight}`}}>
            Your Color will update here
        </div>
    )
}

export default RightPanel;
