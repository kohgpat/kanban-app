import styled from 'styled-components';
import settingsIcon from './images/settings.svg';
import profitsIcon from './images/profits.svg';

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 4px 0px 7px rgba(0, 0, 0, 0.1);
  width: 72px;
  padding-top: 68px;
  z-index: 1;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;

export const NavItem = styled.a`
  height: 72px;
  width: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const NavItemIcon = styled.div`
  height: 34px;
  width: 34px;

  ${props => props.settings && `
    background-image: url(${settingsIcon});
  `}

  ${props => props.profits && `
    background-image: url(${profitsIcon});
  `}
`;
