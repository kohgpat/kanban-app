import React from "react";
import * as s from "./styles";

const Item = ({ item, innerRef, ...restProps }) => {
  return (
    <s.Item ref={innerRef} {...restProps}>
      <s.ItemName>{item.name}</s.ItemName>
      <s.ItemText>{item.text}</s.ItemText>

      <s.ItemMeta>
        <s.ItemUpdatedAt>{item.updatedAt}</s.ItemUpdatedAt>
      </s.ItemMeta>
    </s.Item>
  );
};

export default Item;
