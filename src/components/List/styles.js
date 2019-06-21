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

export const ItemName = styled.h4`
  margin: 0 0 12px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #646678;
`;

export const ItemText = styled.p`
  margin: 0 0 1rem;
  font-size: 14px;
  line-height: 24px;
  color: rgba(100, 102, 120, 0.54);
`;

export const ItemMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemUpdatedAt = styled.span`
  font-size: 13px;
  line-height: 18px;
  font-weight: 600;
  color: #B4BBC8;
`;
