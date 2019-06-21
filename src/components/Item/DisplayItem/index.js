import React from "react";
import formatItemDate from "../../../utils/format-item-date";
import * as s from "./styles";

const DisplayItem = ({
  list,
  item,
  innerRef,
  onItemEdit,
  onItemDelete,
  onItemSave,
  ...restProps
}) => {
  return (
    <s.Item ref={innerRef} {...restProps}>
      <s.Name>{item.name}</s.Name>
      <s.Text>{item.text}</s.Text>

      <s.Meta>
        <s.UpdatedAt>{formatItemDate(item.updatedAt)}</s.UpdatedAt>
      </s.Meta>

      <s.Controls>
        <s.EditButton onClick={() => onItemEdit(item)}>Edit</s.EditButton>
        <s.DeleteButton onClick={() => onItemDelete(list, item)}>
          Delete
        </s.DeleteButton>
      </s.Controls>
    </s.Item>
  );
};

export default DisplayItem;
