import React from "react";
import initialState from "./initialState";
import listsReducer from "./reducer";
import {
  LISTS_ITEMS_REORDER_IN_LIST,
  LISTS_ITEMS_MOVE_TO_LIST,
  LISTS_ITEMS_ADD_ITEM,
  LISTS_ITEMS_TOGGLE_EDIT,
  LISTS_ITEMS_SAVE,
  LISTS_ITEMS_DELETE
} from "./actions";

const ListsContext = React.createContext();

function ListsProvider(props) {
  const [state, dispatch] = React.useReducer(listsReducer, {
    lists: initialState
  });
  const value = React.useMemo(() => [state, dispatch], [state]);
  return <ListsContext.Provider value={value} {...props} />;
}

function useLists() {
  const context = React.useContext(ListsContext);

  if (!context) {
    throw new Error("useLists should be used within a ListsContext");
  }

  const [state, dispatch] = context;

  const reorderItems = (sourceList, source, destination, itemId) => {
    dispatch({
      type: LISTS_ITEMS_REORDER_IN_LIST,
      sourceList,
      source,
      destination,
      itemId
    });
  };

  const moveItemBetweenLists = (
    sourceList,
    destinationList,
    source,
    destination,
    itemId
  ) => {
    dispatch({
      type: LISTS_ITEMS_MOVE_TO_LIST,
      sourceList,
      destinationList,
      source,
      destination,
      itemId
    });
  };

  const addItemToList = list => {
    dispatch({
      type: LISTS_ITEMS_ADD_ITEM,
      list
    });
  };

  const itemToggleEdit = item => {
    dispatch({
      type: LISTS_ITEMS_TOGGLE_EDIT,
      item
    });
  };

  const saveItem = item => {
    dispatch({
      type: LISTS_ITEMS_SAVE,
      item
    });
  };

  const deleteItem = (list, item) => {
    dispatch({
      type: LISTS_ITEMS_DELETE,
      list,
      item
    });
  };

  return {
    state,
    dispatch,
    reorderItems,
    moveItemBetweenLists,
    addItemToList,
    itemToggleEdit,
    saveItem,
    deleteItem
  };
}

export { ListsProvider, useLists };
