import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useLists } from "../../contexts/lists";
import List from "../List";
import * as s from "./styles";

function Lists() {
  const {
    state,
    dispatch,
    reorderItems,
    moveItemBetweenLists,
    addItemToList,
    itemToggleEdit,
    saveItem,
    deleteItem
  } = useLists();

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
      reorderItems(sourceList, source, destination, draggableId);

      return;
    } else {
      // Move items between lists
      moveItemBetweenLists(
        sourceList,
        destinationList,
        source,
        destination,
        draggableId
      );

      return;
    }
  };

  const handleAddItem = list => {
    addItemToList(list);
  };

  const handleToggleItemEdit = item => {
    itemToggleEdit(item);
  };

  const handleItemSave = item => {
    saveItem(item);
  };

  const handleToggleItemDelete = (list, item) => {
    deleteItem(list, item);
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
