import React, { useState } from "react";
import { useLists } from "../../contexts/lists";
import * as s from "./styles";

const Topbar = () => {
  const { setItemsFilter } = useLists();

  const [query, setQuery] = useState("");

  const handleChangeSearchQuery = e => {
    const { value } = e.target;
    setQuery(value);
    setItemsFilter(value);
  };

  return (
    <s.Topbar>
      <s.Logo />

      <s.Separator />

      <s.SearchBar>
        <s.SearchBarIcon />
        <s.SearchBarInput value={query} onChange={handleChangeSearchQuery} />
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
};

export default Topbar;
