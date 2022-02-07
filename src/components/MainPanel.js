import React, {useState} from "react";
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import './MainPanel.css'

const MainPanel = () => {

    const [leftColor, setLeftColor] = useState('')

    const onLeft = (e) =>{   
        console.log(e);
        setLeftColor(e)
        
    }

    return (
        <div className="main-container">
            <LeftPanel onLeft={onLeft}/>
            <RightPanel onRight={leftColor}/>
        </div>
    )
}

export default MainPanel;
