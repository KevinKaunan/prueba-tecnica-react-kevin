import React, { useState } from "react";

const Context = React.createContext({});

export function DataContextProvider({ children }) {
  const [data, setData] = useState([]);
  return (
    <Context.Provider value={{ data, setData }}>{children}</Context.Provider>
  );
}

export default Context;
