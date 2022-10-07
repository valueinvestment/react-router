import { useContext } from "react";
import RouterContext from "../components/RouterContext";

const useRouter = () => {
  const { setPath } = useContext(RouterContext);
  const push = (path) => {
    history.pushState({}, "", path);
    dispatchEvent(new Event("popstate")); 
    setPath(path);
  };
  return { push };
};
export default useRouter;
