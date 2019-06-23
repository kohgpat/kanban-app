import {
  LISTS_ITEMS_REORDER_IN_LIST,
  LISTS_ITEMS_MOVE_TO_LIST
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
