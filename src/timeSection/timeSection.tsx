import React from 'react';
import type { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import type { timeDataInterface } from "../fakeData/fakedata";

import "./timeSection.scss"

interface TimeSectionProps {
    timeDataObject: timeDataInterface;
    provided: DraggableProvided;
    snapshot: DraggableStateSnapshot;
};


const TimeSection = ({timeDataObject, provided, snapshot}: TimeSectionProps) => {

    console.log("🚀 ~ file: timeSection.tsx ~ line 23 ~ {timeDataObject.channels.map ~ timeDataObject.channels", timeDataObject.channels)

    return (
        <div 
            className={"time-section-container"} 
            ref={provided.innerRef} 
            {...provided.draggableProps}
            {...provided.dragHandleProps}
        >
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