import React from "react";
import nanoid from "nanoid";
import omit from "lodash/omit";

const ListsContext = React.createContext();

const initialState = {
  filter: {
    items: {
      term: ""
    }
  },
  lists: {
    1: {
      id: 1,
      name: "Backlog",
      itemIds: [1, 2, 3]
    },
    2: {
      id: 2,
      name: "In progress",
      itemIds: [4, 5, 6]
    },
    3: {
      id: 3,
      name: "Done",
      itemIds: [7, 8, 9]
    }
  },
  listIds: [1, 2, 3],
  items: {
    1: {
      id: 1,
      name: "Nulla volutpat aliquam velit",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
      updatedAt: "Today"
    },
    2: {
      id: 2,
      name: "Facilisis in pretium nisl aliquet",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
      updatedAt: "Two days ago"
    },
    3: {
      id: 3,
      name: "Eget porttitor lorem",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",

      updatedAt: "Today"
    },
    4: {
      id: 4,
      name: "Eget porttitor lorem",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",

      updatedAt: "A week ago"
    },
    5: {
      id: 5,
      name: "Consectetur adipiscing elit",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
      updatedAt: "Today"
    },
    6: {
      id: 6,
      name: "Nulla volutpat aliquam velit",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
      updatedAt: "Now"
    },
    7: {
      id: 7,
      name: "Ac tristique libero volutpat at",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
      updatedAt: "Yesterday"
    },
    8: {
      id: 8,
      name: "Phasellus iaculis neque",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
      updatedAt: "Now"
    },
    9: {
      id: 9,
      name: "Facilisis in pretium nisl aliquet",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar"
    }
  }
};

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
              updatedAt: "",
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
