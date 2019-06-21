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
    } else {
      onItemEdit(item);
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

  const handleSubmit = e => {
    e.preventDefault();

    onItemSave({ ...item, name, text });
  };

  return (
    <s.ItemForm ref={innerRef} {...restProps} onSubmit={handleSubmit}>
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
          ref={textInputRef}
          onChange={e => setText(e.target.value)}
        />
      </s.Row>

      <s.Row>
        <s.Submit>Save</s.Submit>
      </s.Row>
    </s.ItemForm>
  );
};

export default EditItem;
