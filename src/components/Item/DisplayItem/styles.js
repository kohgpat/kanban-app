import styled from "styled-components";
import { ButtonStyles } from "../styles";

export const Item = styled.li`
  background-color: #fff;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.227355);
  border-radius: 2px;
  cursor: pointer;
  width: 311px;
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
  max-height: 48px;
  overflow-x: auto;
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const UpdatedAt = styled.span`
  font-size: 13px;
  line-height: 18px;
  font-weight: 600;
  color: #b4bbc8;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
`;

export const EditToggle = styled.button.attrs({ type: "button" })`
  ${ButtonStyles}
`;

export const DeleteButton = styled.button.attrs({ type: "button" })`
  ${ButtonStyles}

  margin-left: auto;
  color: #000;

  &:focus,
  &:hover {
    border: 1px solid #E30B2C;
    color: #000;
  }

  &:active {
    color: #fff;
    background-color: #E30B2C;
  }
`;
