import React from "react";
import nanoid from "nanoid";
import omit from "lodash/omit";
import initialState from "./initialState";

const ListsContext = React.createContext();

function listsReducer(state, action) {
  switch (action.type) {
    case "LISTS_ITEMS_REORDER_IN_LIST": {
      const itemIds = Array.from(action.sourceList.itemIds);

      itemIds.splice(action.source.index, 1);
      itemIds.splice(action.destination.index, 0, action.itemId);

      const list = {
        ...action.sourceList,
        itemIds: itemIds
      };

      return {
        ...state,
        lists: {
          ...state.lists,
          lists: {
            ...state.lists.lists,
            [list.id]: list
          }
        }
      };
    }
    case "LISTS_ITEMS_MOVE_TO_LIST": {
      const sourceItemIds = Array.from(action.sourceList.itemIds);
      sourceItemIds.splice(action.source.index, 1);

      const destinationItemIds = Array.from(action.destinationList.itemIds);
      destinationItemIds.splice(action.destination.index, 0, action.itemId);

      return {
        ...state,
        lists: {
          ...state.lists,
          lists: {
            ...state.lists.lists,
            [action.sourceList.id]: {
              ...action.sourceList,
              itemIds: sourceItemIds
            },
            [action.destinationList.id]: {
              ...action.destinationList,
              itemIds: destinationItemIds
            }
          }
        }
      };
    }
    case "LISTS_ITEMS_SET_FILTER": {
      return {
        ...state,
        lists: {
          ...state.lists,
          filter: {
            ...state.lists.filter,
            items: {
              ...state.lists.filter.items,
              term: action.term
            }
          }
        }
      };
    }
    case "LISTS_ITEMS_ADD_ITEM": {
      const id = nanoid();

      return {
        ...state,
        lists: {
          ...state.lists,
          lists: {
            ...state.lists.lists,
            [action.list.id]: {
              ...state.lists.lists[action.list.id],
              itemIds: [...state.lists.lists[action.list.id].itemIds, id]
            }
          },
          items: {
            ...state.lists.items,
            [id]: {
              id,
              name: "",
              text: "",
              updatedAt: new Date(),
              isEditing: true
            }
          }
        }
      };
    }
    case "LISTS_ITEMS_TOGGLE_EDIT": {
      return {
        ...state,
        lists: {
          ...state.lists,
          items: {
            ...state.lists.items,
            [action.item.id]: {
              ...action.item,
              isEditing: !action.item.isEditing
            }
          }
        }
      };
    }
    case "LISTS_ITEMS_SAVE": {
      return {
        ...state,
        lists: {
          ...state.lists,
          items: {
            ...state.lists.items,
            [action.item.id]: {
              ...action.item,
              updatedAt: new Date(),
              isEditing: false
            }
          }
        }
      };
    }
    case "LISTS_ITEMS_DELETE": {
      return {
        ...state,
        lists: {
          ...state.lists,
          lists: {
            ...state.lists.lists,
            [action.list.id]: {
              ...state.lists.lists[action.list.id],
              itemIds: state.lists.lists[action.list.id].itemIds.filter(
                id => id !== action.item.id
              )
            }
          },
          items: omit(state.lists.items, [action.item.id])
        }
      };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}

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

  return {
    state,
    dispatch
  };
}

export { ListsProvider, useLists };
