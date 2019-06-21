import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import * as s from "./styles";

const List = ({ list, items, onAddItem }) => (
  <s.List>
    <s.Header>
      <s.Name>{list.name}</s.Name>
      <s.AddButton onClick={() => onAddItem(list)}>+</s.AddButton>
    </s.Header>

    <Droppable droppableId={list.id}>
      {(provided, snapshot) => (
        <s.Items ref={provided.innerRef} isDraggingOver={snapshot.isDraggingOver}>
          {items.map((item, itemIndex) => (
            <Draggable key={item.id} draggableId={item.id} index={itemIndex}>
              {provided => (
                <s.Item
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <s.ItemName>{item.name}</s.ItemName>
                  <s.ItemText>{item.text}</s.ItemText>

                  <s.ItemMeta>
                    <s.ItemAssignee>
                      {item.assignee && item.assignee.name}
                    </s.ItemAssignee>
                    <s.ItemUpdatedAt>{item.updatedAt}</s.ItemUpdatedAt>
                  </s.ItemMeta>
                </s.Item>
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
