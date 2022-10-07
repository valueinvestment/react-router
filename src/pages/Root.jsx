import React from "react";
import useRouter from "./../hooks/useRouter";

const Root = () => {
  const { push } = useRouter();
  return (
    <>
      <h1>Root</h1>
      <button onClick={() => push("/about")}>About</button>
    </>
  );
};

export default Root;
