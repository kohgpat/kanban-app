import styled from "styled-components";
import { InputStyles, ButtonStyles } from "../styles";

export const ItemForm = styled.form`
  background-color: #fff;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.227355);
  border-radius: 2px;
  padding: 1rem;
  margin-bottom: 20px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
`;

export const Input = styled.input.attrs({ type: "text" })`
  ${InputStyles}
`;

export const Textarea = styled.textarea`
  ${InputStyles}
  height: auto;
`;

export const Submit = styled.button.attrs({ type: "submit" })`
  ${ButtonStyles}
`;
