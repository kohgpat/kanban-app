import React, { useState, useEffect } from "react";
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

const EditItem = ({ item, innerRef, onItemEdit, onItemSave, ...restProps }) => {
  const [name, setName] = useState(item.name || "");
  const [text, setText] = useState(item.text || "");

  const nameInputRef = React.createRef();

  useEffect(() => {
    const ref = nameInputRef.current;
    ref.focus();
  }, [nameInputRef]);

  const handleSubmit = e => {
    e.preventDefault();

    onItemSave({ ...item, name, text });
  };

  return (
    <s.ItemForm
      ref={innerRef}
      {...restProps}
      onSubmit={handleSubmit}
    >
      <s.Row>
        <s.Label>Name</s.Label>
        <s.Input
          name="name"
          value={name}
          ref={nameInputRef}
          onChange={e => setName(e.target.value)}
        />
      </s.Row>

      <s.Row>
        <s.Label>Text</s.Label>
        <s.Textarea
          name="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </s.Row>

      <s.Row>
        <s.Submit>Save</s.Submit>
      </s.Row>
    </s.ItemForm>
  );
};

const Item = ({ item, ...restProps }) => {
  return item.isEditing ? (
    <EditItem item={item} {...restProps} />
  ) : (
    <DisplayItem item={item} {...restProps} />
  );
};

export default Item;
