import { useEffect, useState } from "react";
import React from "react";
import RouterContext from "./RouterContext";

// path, setPath를 Context에 등록 + children으로 받은 Route들을 <div className="App"> 안에 렌더링
function Router({ children }) {
  const [path, setPath] = useState(window.location.pathname);

  return (
    <RouterContext.Provider value={{ path, setPath }}>
      <div className="App">{children}</div>
    </RouterContext.Provider>
  );
}

export default Router;
