import { useContext } from "react";
import RouterContext from "./RouterContext";

const Route = ({ path: curPath, component }) => {
  const { path } = useContext(RouterContext);

  return path === curPath && component;
};
export default Route;
