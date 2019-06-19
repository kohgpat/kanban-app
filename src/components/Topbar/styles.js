import styled from 'styled-components';
import logoIcon from './images/logo.svg';

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
  margin: 16px 16px 16px 36px;
  background-image: url(${logoIcon});
`;
