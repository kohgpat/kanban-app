import React from 'react';
import * as s from './styles';

const Topbar = () => (
  <s.Topbar>
    <s.Logo />

    <s.Separator />

    <s.Separator pullRight />

    <s.CurrentUser>
      <s.CurrentUserIcon />
      <s.CurrentUserName>Leonetta Lloyd</s.CurrentUserName>
    </s.CurrentUser>
  </s.Topbar>
);

export default Topbar;
