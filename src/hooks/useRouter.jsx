import { useContext } from "react";
import RouterContext from "../components/RouterContext";

// Context로부터 setPath를 받아서 history에 state를 추가 + popstate이벤트 발생 + path변경
const useRouter = () => {
  const { setPath } = useContext(RouterContext);
  const push = (path) => {
    history.pushState({}, "", path);
    dispatchEvent(new Event("popstate")); // popstate이벤트 발생
    setPath(path);
  };
  return { push };
};
export default useRouter;
