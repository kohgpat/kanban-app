import React, { useState, useEffect } from "react";
import autosize from "autosize";
import useKeyPress from "../../../hooks/useKeyPress";
import * as s from "./styles";

const EditItem = ({
  list,
  item,
  innerRef,
  onItemEdit,
  onItemDelete,
  onItemSave,
  ...restProps
}) => {
  const [name, setName] = useState(item.name || "");
  const [text, setText] = useState(item.text || "");
  const closeFormKey = useKeyPress("Escape");

  if (closeFormKey) {
    if (name === "" && text === "") {
      onItemDelete(list, item);
    }
  }

  const nameInputRef = React.createRef();
  const textInputRef = React.createRef();

  useEffect(() => {
    const ref = nameInputRef.current;
    ref.focus();
  }, []);

  useEffect(() => {
    const ref = textInputRef.current;
    autosize(ref);
  });

  const validateItem = item => {
    if (!item.name || !item.text) {
      return false;
    }

    return true;
  };

  const handleSubmit = e => {
    e.preventDefault();

    const itemToUpdate = {
      ...item, name, text
    };

    if (!validateItem(itemToUpdate)) {
      return;
    }

    onItemSave(itemToUpdate);
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeText = e => {
    setText(e.target.value);
  };

  return (
    <s.ItemForm ref={innerRef} {...restProps} onSubmit={handleSubmit}>
      <s.Row>
        <s.Label>Name</s.Label>
        <s.Input
          name="name"
          value={name}
          ref={nameInputRef}
          onChange={handleChangeName}
        />
      </s.Row>

      <s.Row>
        <s.Label>Text</s.Label>
        <s.Textarea
          name="text"
          value={text}
          ref={textInputRef}
          onChange={handleChangeText}
        />
      </s.Row>

      <s.Row>
        <s.Submit>Save</s.Submit>
      </s.Row>
    </s.ItemForm>
  );
};

export default EditItem;
