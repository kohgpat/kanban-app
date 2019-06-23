import {
  LISTS_ITEMS_REORDER_IN_LIST,
  LISTS_ITEMS_MOVE_TO_LIST,
  LISTS_ITEMS_SET_FILTER,
  LISTS_ITEMS_ADD_ITEM
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
