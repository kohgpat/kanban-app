import styled from "styled-components";
import logoIcon from "./images/logo.svg";
import notificationIcon from "./images/notification.svg";
import searchIcon from "./images/search.svg";
import avatar from "./images/avatar.png";

export const Topbar = styled.div`
  display: flex;
  align-items: center;
  height: var(--topbar-height);
  background-color: #fff;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
`;

export const Logo = styled.div`
  height: 36px;
  width: 36px;
  margin: 16px 36px 16px 36px;
  background-image: url(${logoIcon});
`;

export const Separator = styled.div`
  background-color: #f7f8f9;
  height: 36px;
  width: 3px;
`;

export const SearchBar = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  position: relative;
`;

export const SearchBarIcon = styled.div`
  height: 20px;
  width: 20px;
  background-image: url(${searchIcon});
  background-size: cover;
  background-position: center center;
  margin: 0 0 0 16px;
  position: absolute;
`;

export const SearchBarInput = styled.input.attrs({
  type: "text",
  name: "q",
  placeholder: "Search for ..."
})`
  border: 0;
  height: 20px;
  padding: 1rem 1rem 1rem 3rem;
  font-size: 15px;
  width: 50%;

  &::placeholder {
    color: #C5CACD;
  }
`;

export const Controls = styled.div`
  margin-left: auto;
  margin-right: 28px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Control = styled.button`
  border: 0;
  padding: 0;
  cursor: pointer;
`;

export const ControlIcon = styled.div`
  height: 22px;
  width: 22px;

  ${props =>
    props.notification &&
    `
    background-image: url(${notificationIcon});
  `};
`;

export const CurrentUser = styled.div`
  display: flex;
  align-items: center;
  padding: 0 32px 0 28px;
  height: 100%;
  cursor: pointer;
`;

export const CurrentUserIcon = styled.div`
  height: 30px;
  width: 30px;
  background-image: url(${avatar});
  background-position: center center;
  background-size: cover;
  border-radius: 50%;
`;

export const CurrentUserName = styled.span`
  display: block;
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  padding-left: 16px;
`;
