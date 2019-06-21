import React from "react";
import DisplayItem from "./DisplayItem";
import EditItem from "./EditItem";

const Item = ({ item, ...restProps }) => {
  return item.isEditing ? (
    <EditItem item={item} {...restProps} />
  ) : (
    <DisplayItem item={item} {...restProps} />
  );
};

export default Item;
