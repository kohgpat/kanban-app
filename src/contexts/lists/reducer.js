import nanoid from "nanoid";
import omit from "lodash/omit";
import {
  LISTS_ITEMS_REORDER_IN_LIST,
  LISTS_ITEMS_MOVE_TO_LIST,
  LISTS_ITEMS_SET_FILTER,
  LISTS_ITEMS_ADD_ITEM,
  LISTS_ITEMS_TOGGLE_EDIT,
  LISTS_ITEMS_SAVE,
  LISTS_ITEMS_DELETE
} from "./actions";

function reducer(state, action) {
  switch (action.type) {
    case LISTS_ITEMS_REORDER_IN_LIST: {
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
    case LISTS_ITEMS_MOVE_TO_LIST: {
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
    case LISTS_ITEMS_SET_FILTER: {
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
    case LISTS_ITEMS_ADD_ITEM: {
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
    case LISTS_ITEMS_TOGGLE_EDIT: {
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
    case LISTS_ITEMS_SAVE: {
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
    case LISTS_ITEMS_DELETE: {
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

export default reducer;
