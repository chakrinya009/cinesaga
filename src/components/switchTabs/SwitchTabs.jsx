import React, { useState } from "react";
import "./style.scss";
const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left,setLeft]=useState(0)
  return (
    <div className="switchingTabs">
      SwitchTabs
      <div className="tabItems">
        {data.map((tab, index) => (
          <span key={index} className={`tabItem`}></span>
        ))}
        <span className="movingBg">
          
        </span>
      </div>
    </div>
  );
};

export default SwitchTabs;
