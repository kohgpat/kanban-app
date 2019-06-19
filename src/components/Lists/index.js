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
            author: {
              id: 1,
              name: "OZ"
            }
          },
          {
            id: 2,
            name: "Facilisis in pretium nisl aliquet",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
            author: {
              id: 2,
              name: "LE"
            }
          },
          {
            id: 3,
            name: "Eget porttitor lorem",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar",
            author: {
              id: 3,
              name: "ME"
            }
          }
        ]
      },
      {
        id: 2,
        name: "Todo",
        items: []
      },
      {
        id: 3,
        name: "In progress - Design",
        items: []
      },
      {
        id: 4,
        name: "In progress - Development",
        items: []
      },
      {
        id: 5,
        name: "Done",
        items: []
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
