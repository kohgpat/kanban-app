import React from 'react';
import * as s from './styles';

const Topbar = () => (
  <s.Topbar>
    <s.Logo />

    <s.Separator />

    <s.SearchBar>
      <s.SearchBarIcon />
      <s.SearchBarInput />
    </s.SearchBar>

    <s.Controls>
      <s.Control>
        <s.ControlIcon notification />
      </s.Control>
    </s.Controls>

    <s.Separator />

    <s.CurrentUser>
      <s.CurrentUserIcon />
      <s.CurrentUserName>Leonetta Lloyd</s.CurrentUserName>
    </s.CurrentUser>
  </s.Topbar>
);

export default Topbar;
