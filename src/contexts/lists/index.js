import React from "react";

const ListsContext = React.createContext();

const initialState = {
  lists: {
    1: {
      id: 1,
      name: "Backlog",
      itemIds: [1, 2, 3]
    },
    2: {
      id: 2,
      name: "Todo",
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
      assignee: {
        id: 1,
        name: "OZ"
      },
      updatedAt: "Today"
    },
    2: {
      id: 2,
      name: "Facilisis in pretium nisl aliquet",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
      assignee: {
        id: 2,
        name: "LE"
      },
      updatedAt: "Two days ago"
    },
    3: {
      id: 3,
      name: "Eget porttitor lorem",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
      assignee: {
        id: 3,
        name: "ME"
      },
      updatedAt: "Today"
    },
    4: {
      id: 4,
      name: "Eget porttitor lorem",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
      assignee: {
        id: 4,
        name: "AM"
      },
      updatedAt: "A week ago"
    },
    5: {
      id: 5,
      name: "Consectetur adipiscing elit",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
      assignee: {
        id: 1,
        name: "OZ"
      }
    },
    6: {
      id: 6,
      name: "Nulla volutpat aliquam velit",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
      assignee: {
        id: 2,
        name: "LE"
      }
    },
    7: {
      id: 7,
      name: "Ac tristique libero volutpat at",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
      assignee: {
        id: 2,
        name: "LE"
      }
    },
    8: {
      id: 8,
      name: "Phasellus iaculis neque",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
      assignee: {
        id: 1,
        name: "OZ"
      }
    },
    9: {
      id: 9,
      name: "Facilisis in pretium nisl aliquet",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
      assignee: {
        id: 4,
        name: "AM"
      }
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
