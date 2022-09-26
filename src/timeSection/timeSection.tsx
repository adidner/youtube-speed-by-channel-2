import React from 'react';
import type { timeDataInterface } from "../fakeData/fakedata";

import "./timeSection.scss"

interface TimeSectionProps {
    timeDataObject: timeDataInterface;
};


const TimeSection = (props: TimeSectionProps) => {
    const timeDataObject = props.timeDataObject;

    console.log("🚀 ~ file: timeSection.tsx ~ line 23 ~ {timeDataObject.channels.map ~ timeDataObject.channels", timeDataObject.channels)

    return (
        <div>
            <div className={"all-sections time-row"}>Time Area: {timeDataObject.time}</div>
            <div>                
                <div>
                    <div className={"all-sections channel-and-title-rows"}>Channels</div>
                    {timeDataObject.channels.map((childText) => 
                        <div className={"all-section text-row"}>
                            {childText}
                        </div>
                    )}
                </div>
                <div>
                    <div className={"all-sections channel-and-title-rows"}>Title</div>
                    {timeDataObject.titles.map((childText) => 
                        <div className={"all-section text-row"}>
                            {childText}
                        </div>
                    )}
                </div>
            </div>
        </div>    
    );
}

export { TimeSection };