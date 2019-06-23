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
      itemIds: [1]
    },
    2: {
      id: 2,
      name: "In progress",
      itemIds: [2]
    },
    3: {
      id: 3,
      name: "Done",
      itemIds: [3]
    }
  },
  listIds: [1, 2, 3],
  items: {
    1: {
      id: 1,
      name: "Todo #1",
      text: "Detailed description",
      updatedAt: new Date()
    },
    2: {
      id: 2,
      name: "In progress #1",
      text: "Detailed description",
      updatedAt: new Date()
    },
    3: {
      id: 3,
      name: "Done #1",
      text: "Detailed description",
      updatedAt: new Date()
    }
  }
};

export default initialState;
