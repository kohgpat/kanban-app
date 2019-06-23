import {
  LISTS_ITEMS_REORDER_IN_LIST,
  LISTS_ITEMS_MOVE_TO_LIST,
  LISTS_ITEMS_SET_FILTER,
  LISTS_ITEMS_ADD_ITEM,
  LISTS_ITEMS_TOGGLE_EDIT,
  LISTS_ITEMS_SAVE
} from "./actions";
import reducer from "./reducer";

it("should reorder items in the same list", () => {
  const state = {
    lists: {
      lists: {
        1: {
          id: 1,
          itemIds: [1, 2]
        }
      }
    }
  };

  const action = {
    type: LISTS_ITEMS_REORDER_IN_LIST,
    sourceList: {
      id: 1,
      itemIds: [1, 2]
    },
    source: {
      index: 0
    },
    destination: {
      index: 1
    },
    itemId: 1
  };

  const newState = {
    lists: {
      lists: {
        1: {
          id: 1,
          itemIds: [2, 1]
        }
      }
    }
  };

  expect(reducer(state, action)).toEqual(newState);
});

it("should move items between lists", () => {
  const state = {
    lists: {
      lists: {
        1: {
          id: 1,
          itemIds: [1, 2]
        },
        2: {
          id: 2,
          itemIds: []
        }
      }
    }
  };

  const action = {
    type: LISTS_ITEMS_MOVE_TO_LIST,
    sourceList: {
      id: 1,
      itemIds: [1, 2]
    },
    destinationList: {
      id: 2,
      itemIds: []
    },
    source: {
      index: 0
    },
    destination: {
      index: 1
    },
    itemId: 1
  };

  const newState = {
    lists: {
      lists: {
        1: {
          id: 1,
          itemIds: [2]
        },
        2: {
          id: 2,
          itemIds: [1]
        }
      }
    }
  };

  expect(reducer(state, action)).toEqual(newState);
});

it("should add item to the list with empty values", () => {
  const state = {
    lists: {
      lists: {
        1: {
          id: 1,
          itemIds: []
        }
      },
      items: {}
    }
  };

  const action = {
    type: LISTS_ITEMS_ADD_ITEM,
    list: state.lists.lists[1]
  };

  expect(reducer(state, action).lists.lists[1].itemIds.length).toEqual(1);
});

it("should toggle edit flag on item", () => {
  const state = {
    lists: {
      lists: {
        1: {
          id: 1,
          itemIds: [1]
        }
      },
      items: {
        1: {
          id: 1,
          isEditing: false
        }
      }
    }
  };

  const action = {
    type: LISTS_ITEMS_TOGGLE_EDIT,
    item: state.lists.items[1]
  };

  expect(reducer(state, action).lists.items[1].isEditing).toEqual(true);
});

it("should update item on the list", () => {
  const state = {
    lists: {
      lists: {
        1: {
          id: 1,
          itemIds: [1]
        }
      },
      items: {
        1: {
          id: 1,
          isEditing: true
        }
      }
    }
  };

  const action = {
    type: LISTS_ITEMS_TOGGLE_EDIT,
    item: {
      ...state.lists.items[1],
      text: "New text"
    }
  };

  const newItem = reducer(state, action).lists.items[1];

  expect(newItem.isEditing).toEqual(false);
  expect(newItem.text).toEqual("New text");
});

it("should set filter", () => {
  const state = {
    lists: {
      filter: {
        items: {
          term: ""
        }
      }
    }
  };

  const action = {
    type: LISTS_ITEMS_SET_FILTER,
    term: "Hello"
  };

  const newState = {
    lists: {
      filter: {
        items: {
          term: "Hello"
        }
      }
    }
  };

  expect(reducer(state, action)).toEqual(newState);
});
