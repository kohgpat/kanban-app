import styled from "styled-components";
import { ButtonStyles } from "../styles";

const InputStyles = `
  border: 1px solid #b4bbc8;
  height: 20px;
  padding: 1rem 0.5rem;
  font-size: 15px;

  &::placeholder {
    color: #C5CACD;
  }
`;

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
  color: rgba(100, 102, 120, 0.54);
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
`;

export const Input = styled.input.attrs({ type: "text" })`
  ${InputStyles}
`;

export const Textarea = styled.textarea`
  ${InputStyles}
  height: auto;
  resize: none;
`;

export const Submit = styled.button.attrs({ type: "submit" })`
  ${ButtonStyles}
  color: #fff;
  border-color: #3b93f8;
  background-color: #3b93f8;

  &:hover,
  &:focus {
    border-color: #3b93f8;
  }
`;
