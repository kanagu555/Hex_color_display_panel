import React from "react";
import './RightPanel.css'

const RightPanel = (props) => {
    return (
        
        <div className="right-container" style={{backgroundColor:`${props.onRight}`}}>
            Color will update here
        </div>
    )
}

export default RightPanel;
