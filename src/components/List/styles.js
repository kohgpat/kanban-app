import styled from "styled-components";

export const List = styled.li`
  min-width: 311px;
  flex-shrink: 0;
  cursor: pointer;
  padding: 1rem;
  margin: 1rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const Name = styled.h4`
  margin: 0;
  color: #272a43;
  font-size: 24px;
  line-height: 33px;
`;

export const AddButton = styled.button.attrs({ type: "button" })`
  margin-left: auto;
  border: 0;
  border-radius: 50%;
  background-color: #fff;
  height: 28px;
  width: 28px;
  font-size: 16px;
  font-weight: 600;
`;

export const Items = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  min-height: 100%;

  ${props => props.isDraggingOver && `
    background-color: #f1f1f1;
  `};
`;
