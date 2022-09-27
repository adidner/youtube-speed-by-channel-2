import React, { useState } from "react";
import { TimeSection } from "./timeSection/timeSection";
import { fakeTimeData } from "./fakeData/fakedata";
import "./popup.scss";
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';



function IndexPopup() {

  const [timeData, setTimeData] = useState(fakeTimeData);
  

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // if no destination, we weren't dropped in a valid area, do nothing
    if (!destination) {
      return;
    }

    // if we drop in the same spot
    if(
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ){
      return;
    }

    // Moving the order of the Time Section Level Elements
    // Just a re-rodering
    if(source.droppableId === destination.droppableId){
      let reorderedTimeData = timeData;
      let add = reorderedTimeData[source.index];

      reorderedTimeData.splice(source.index, 1);
      reorderedTimeData.splice(destination.index, 0, add);

      setTimeData(reorderedTimeData);
    }



    // Move Channel Title for ordering

    // Move Channel Title across Time Section Level elements



    // Moving the order of the Text Level elements

    // Moving Text level elements across channel title
    
    // Moving Text level elements across Time Section Level Elements


  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="TimeContainerDropArea" type="droppableItem" direction="horizontal">
        {(provided, snapshot) => 
          <div 
            className={"main-container"}
            ref={provided.innerRef}
          >
            {
              timeData.map((timeSection, index) => {
                return (
                  <Draggable key={timeSection.id} draggableId={timeSection.id} index={index}>
                    {(provided, snapshot) => (
                      <TimeSection timeDataObject={timeSection} provided={provided} snapshot={snapshot}/>
                    )}
                  </Draggable>
                );
              })
            }
            
            {provided.placeholder}
          </div>
        }
      </Droppable>
    </DragDropContext>
  );
}

export default IndexPopup;
