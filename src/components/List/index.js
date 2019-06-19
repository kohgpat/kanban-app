import React from "react";
import * as s from "./styles";

const List = ({ list }) => (
  <s.List>
    <s.Name>{list.name}</s.Name>

    <s.Items>
      {list.items.map(item => (
        <s.Item key={item.id}>
          <s.ItemName>{item.name}</s.ItemName>
          <s.ItemText>{item.text}</s.ItemText>

          <s.ItemMeta>
            <s.ItemAssignee>
              {item.assignee && item.assignee.name}
            </s.ItemAssignee>
            <s.ItemUpdatedAt>{item.updatedAt}</s.ItemUpdatedAt>
          </s.ItemMeta>
        </s.Item>
      ))}
    </s.Items>
  </s.List>
);

export default List;
