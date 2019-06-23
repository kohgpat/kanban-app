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
      updatedAt: new Date()
    },
    2: {
      id: 2,
      name: "Facilisis in pretium nisl aliquet",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
      updatedAt: new Date()
    },
    3: {
      id: 3,
      name: "Eget porttitor lorem",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",

      updatedAt: new Date()
    },
    4: {
      id: 4,
      name: "Eget porttitor lorem",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
      updatedAt: new Date()
    },
    5: {
      id: 5,
      name: "Consectetur adipiscing elit",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
      updatedAt: new Date()
    },
    6: {
      id: 6,
      name: "Nulla volutpat aliquam velit",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
      updatedAt: new Date()
    },
    7: {
      id: 7,
      name: "Ac tristique libero volutpat at",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
      updatedAt: new Date()
    },
    8: {
      id: 8,
      name: "Phasellus iaculis neque",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
      updatedAt: new Date()
    },
    9: {
      id: 9,
      name: "Facilisis in pretium nisl aliquet",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
      updatedAt: new Date()
    }
  }
};

export default initialState;
