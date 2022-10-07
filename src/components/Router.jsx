import { useState } from "react";
import React from "react";
import RouterContext from "./RouterContext";

function Router({ children }) {
  const [path, setPath] = useState(window.location.pathname);

  return (
    <RouterContext.Provider value={{ path, setPath }}>
      <div className="App">{children}</div>
    </RouterContext.Provider>
  );
}

export default Router;
