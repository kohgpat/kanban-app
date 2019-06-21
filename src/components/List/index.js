import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Item from "../Item";
import * as s from "./styles";

const List = ({ list, items, onAddItem, onItemEdit }) => (
  <s.List>
    <s.Header>
      <s.Name>{list.name}</s.Name>
      <s.AddButton onClick={() => onAddItem(list)}>+</s.AddButton>
    </s.Header>

    <Droppable droppableId={list.id}>
      {(provided, snapshot) => (
        <s.Items
          ref={provided.innerRef}
          isDraggingOver={snapshot.isDraggingOver}
        >
          {items.map((item, itemIndex) => (
            <Draggable key={item.id} draggableId={item.id} index={itemIndex}>
              {provided => (
                <Item
                  innerRef={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  item={item}
                  onItemEdit={onItemEdit}
                />
              )}
            </Draggable>
          ))}

          {provided.placeholder}
        </s.Items>
      )}
    </Droppable>
  </s.List>
);

export default List;
