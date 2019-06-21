import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useLists } from "../../contexts/lists";
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

  const handleAddItem = list => {
    dispatch({
      type: "LISTS_ITEMS_ADD_ITEM",
      list
    });
  };

  const handleToggleItemEdit = item => {
    dispatch({
      type: "LISTS_ITEMS_TOGGLE_EDIT",
      item
    });
  };

  const handleItemSave = item => {
    dispatch({
      type: "LISTS_ITEMS_SAVE",
      item
    });
  };

  const handleToggleItemDelete = (list, item) => {
    dispatch({
      type: "LISTS_ITEMS_DELETE",
      list,
      item
    });
  };

  return (
    <s.Lists>
      <DragDropContext onDragEnd={onDragEnd}>
        {lists.map(list => {
          const items = list.itemIds
            .map(itemId => state.lists.items[itemId])
            .filter(item => {
              const filterTerm =
                state.lists.filter.items.term &&
                state.lists.filter.items.term.toLowerCase();

              if (!filterTerm) {
                return item;
              }

              return (
                item.name.toLowerCase().includes(filterTerm) ||
                item.text.toLowerCase().includes(filterTerm)
              );
            });
          return (
            <List
              key={list.id}
              list={list}
              items={items}
              onAddItem={handleAddItem}
              onItemEdit={handleToggleItemEdit}
              onItemDelete={handleToggleItemDelete}
              onItemSave={handleItemSave}
            />
          );
        })}
      </DragDropContext>
    </s.Lists>
  );
}

export default Lists;
