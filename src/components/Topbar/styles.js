import styled from 'styled-components';
import logoIcon from './images/logo.svg';
import notificationIcon from './images/notification.svg';
import avatar from './images/avatar.png';

export const Topbar = styled.div`
  display: flex;
  align-items: center;
  height: 68px;
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
  background-color: #F7F8F9;
  height: 36px;
  width: 3px;
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

  ${props => props.notification && `
    background-image: url(${notificationIcon});
  `}
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
