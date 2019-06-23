import React from "react";
import initialState from "./initialState";
import listsReducer from "./reducer";

const ListsContext = React.createContext();

function ListsProvider(props) {
  const [state, dispatch] = React.useReducer(listsReducer, {
    lists: initialState
  });
  const value = React.useMemo(() => [state, dispatch], [state]);
  return <ListsContext.Provider value={value} {...props} />;
}

function useLists() {
  const context = React.useContext(ListsContext);

  if (!context) {
    throw new Error("useLists should be used within a ListsContext");
  }

  const [state, dispatch] = context;

  return {
    state,
    dispatch
  };
}

export { ListsProvider, useLists };
