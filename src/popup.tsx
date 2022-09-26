import React, { useState } from "react";
import { TimeSection } from "./timeSection/timeSection";
import { fakeTimeData } from "./fakeData/fakedata";
import "./popup.scss";


function IndexPopup() {

  return (
    <div className={"main-container"}>
      {
        fakeTimeData.map((timeSection) => {
          return (<TimeSection timeDataObject={timeSection}/>)
        })
      }
    </div>
  );
}

export default IndexPopup;
