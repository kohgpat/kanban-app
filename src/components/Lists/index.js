import React, { Component } from "react";
import * as s from "./styles";
import List from "../List";

class Lists extends Component {
  state = {
    lists: [
      {
        id: 1,
        name: "Backlog",
        items: [
          {
            id: 1,
            name: "Nulla volutpat aliquam velit",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
            assignee: {
              id: 1,
              name: "OZ"
            },
            updatedAt: 'Today'
          },
          {
            id: 2,
            name: "Facilisis in pretium nisl aliquet",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
            assignee: {
              id: 2,
              name: "LE"
            },
            updatedAt: 'Two days ago'
          },
          {
            id: 3,
            name: "Eget porttitor lorem",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
            assignee: {
              id: 3,
              name: "ME"
            },
            updatedAt: 'Today'
          }
        ]
      },
      {
        id: 2,
        name: "Todo",
        items: [
          {
            id: 4,
            name: "Eget porttitor lorem",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
            assignee: {
              id: 4,
              name: "AM"
            },
            updatedAt: 'A week ago'
          },
          {
            id: 5,
            name: "Consectetur adipiscing elit",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
            assignee: {
              id: 1,
              name: "OZ"
            }
          },
          {
            id: 6,
            name: "Nulla volutpat aliquam velit",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
            assignee: {
              id: 2,
              name: "LE"
            }
          },
        ]
      },
      {
        id: 5,
        name: "Done",
        items: [
          {
            id: 7,
            name: "Ac tristique libero volutpat at",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
            assignee: {
              id: 2,
              name: "LE"
            }
          },
          {
            id: 8,
            name: "Phasellus iaculis neque",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
            assignee: {
              id: 1,
              name: "OZ"
            }
          },
          {
            id: 9,
            name: "Facilisis in pretium nisl aliquet",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
            assignee: {
              id: 4,
              name: "AM"
            }
          },
        ]
      }
    ]
  };

  render() {
    const { lists } = this.state;

    return (
      <s.Lists>{lists.map(list => <List key={list.id} list={list} />)}</s.Lists>
    );
  }
}

export default Lists;
