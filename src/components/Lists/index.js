import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import * as s from "./styles";
import List from "../List";

class Lists extends Component {
  state = {
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

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceList = this.state.lists[source.droppableId];
    const destinationList = this.state.lists[destination.droppableId];

    if (sourceList === destinationList) {
      const itemIds = Array.from(sourceList.itemIds);
      itemIds.splice(source.index, 1);
      itemIds.splice(destination.index, 0, draggableId);

      const list = {
        ...sourceList,
        itemIds: itemIds
      };

      this.setState({
        ...this.state,
        lists: {
          ...this.state.lists,
          [list.id]: list
        }
      });
    } else {
    }
  };

  render() {
    const lists = this.state.listIds.map(listId => this.state.lists[listId]);

    return (
      <s.Lists>
        <DragDropContext onDragEnd={this.onDragEnd}>
          {lists.map(list => {
            const items = list.itemIds.map(itemId => this.state.items[itemId]);
            return <List key={list.id} list={list} items={items} />;
          })}
        </DragDropContext>
      </s.Lists>
    );
  }
}

export default Lists;
