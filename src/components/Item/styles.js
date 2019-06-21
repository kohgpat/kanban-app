import styled from "styled-components";

export const ButtonStyles = `
  border: 1px solid #b4bbc8;
  border-radius: 2px;
  color: #000;
  font-size: 13px;
  font-weight: 600;
  padding: 0.5rem 1rem;

  &:hover,
  &:focus {
    border-color: #3b93f8;
  }

  &:active {
    color: #fff;
    background-color: #3b93f8;
  }
`;

export const InputStyles = `
  border: 1px solid #b4bbc8;
  height: 20px;
  padding: 1rem;
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
