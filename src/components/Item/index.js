import React from "react";
import * as s from "./styles";

const Item = ({ item, innerRef, ...restProps }) => {
  return (
    <s.Item ref={innerRef} {...restProps}>
      <s.Name>{item.name}</s.Name>
      <s.Text>{item.text}</s.Text>

      <s.Meta>
        <s.EditToggle>Edit</s.EditToggle>
        <s.UpdatedAt>{item.updatedAt}</s.UpdatedAt>
      </s.Meta>
    </s.Item>
  );
};

export default Item;
