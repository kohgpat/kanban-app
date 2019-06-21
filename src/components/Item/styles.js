import styled from "styled-components";

const ButtonStyles = `
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

const InputStyles = `
  border: 0;
  height: 20px;
  padding: 1rem;
  font-size: 15px;

  &::placeholder {
    color: #C5CACD;
  }
`;

export const Item = styled.li`
  background-color: #fff;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.227355);
  border-radius: 2px;
  cursor: pointer;
  width: 311px;
  height: 158px;
  padding: 1rem;
  margin-bottom: 20px;
`;

export const Name = styled.h4`
  margin: 0 0 12px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #646678;
`;

export const Text = styled.p`
  margin: 0 0 1rem;
  font-size: 14px;
  line-height: 24px;
  color: rgba(100, 102, 120, 0.54);
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const EditToggle = styled.button.attrs({ type: "button" })`
  ${ButtonStyles}
`;

export const UpdatedAt = styled.span`
  font-size: 13px;
  line-height: 18px;
  font-weight: 600;
  color: #b4bbc8;
`;

export const ItemForm = styled.form``;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
`;

export const Input = styled.input.attrs({ type: "text" })`
  ${InputStyles}
`;

export const Textarea = styled.textarea`
  ${InputStyles}
`;

export const Submit = styled.button.attrs({ type: "submit" })`
  ${ButtonStyles}
`;
