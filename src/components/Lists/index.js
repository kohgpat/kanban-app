import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { ListsProvider, useLists } from "../../contexts/lists";
import List from "../List";
import * as s from "./styles";

function Lists() {
  const { state, dispatch } = useLists();

  const lists = state.lists.listIds.map(listId => state.lists.lists[listId]);

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceList = state.lists.lists[source.droppableId];
    const destinationList = state.lists.lists[destination.droppableId];

    if (sourceList === destinationList) {
      // Reorder items in the same list
      dispatch({
        type: "LISTS_ITEMS_REORDER_IN_LIST",
        sourceList,
        source,
        destination,
        itemId: draggableId
      });

      return;
    } else {
      // Move items between lists
      dispatch({
        type: "LISTS_ITEMS_MOVE_TO_LIST",
        sourceList,
        destinationList,
        source,
        destination,
        itemId: draggableId
      });

      return;
    }
  };

  return (
    <s.Lists>
      <DragDropContext onDragEnd={onDragEnd}>
        {lists.map(list => {
          const items = list.itemIds.map(itemId => state.lists.items[itemId]);
          return <List key={list.id} list={list} items={items} />;
        })}
      </DragDropContext>
    </s.Lists>
  );
}

function WiredLists() {
  return (
    <ListsProvider>
      <Lists />
    </ListsProvider>
  );
}

export default WiredLists;
