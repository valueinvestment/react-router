import React, { useContext } from "react";
import RouterContext from "./RouterContext";

// Context로부터 받은 path와 Route의 path를 비교하여 일치하면 해당 Route의 component를 렌더링
const Route = ({ path: curPath, component }) => {
  const { path } = useContext(RouterContext);

  return path === curPath && component;
};
export default Route;
