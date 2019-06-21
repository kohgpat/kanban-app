import React from "react";
import * as s from "./styles";

const DisplayItem = ({ item, innerRef, onItemEdit, onItemSave, ...restProps }) => {
  return (
    <s.Item ref={innerRef} {...restProps}>
      <s.Name>{item.name}</s.Name>
      <s.Text>{item.text}</s.Text>

      <s.Meta>
        <s.EditToggle onClick={() => onItemEdit(item)}>Edit</s.EditToggle>
        <s.UpdatedAt>{item.updatedAt}</s.UpdatedAt>
      </s.Meta>
    </s.Item>
  );
};

export default DisplayItem;
