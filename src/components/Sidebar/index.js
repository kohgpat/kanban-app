import React from 'react';
import * as s from './styles';

const Sidebar = () => (
  <s.Sidebar>
    <s.Nav>
      <s.NavItem>
        <s.NavItemIcon settings />
      </s.NavItem>
      <s.NavItem>
        <s.NavItemIcon profits />
      </s.NavItem>
    </s.Nav>
  </s.Sidebar>
);

export default Sidebar;
