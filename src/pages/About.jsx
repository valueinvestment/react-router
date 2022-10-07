import React from "react";
import useRouter from "./../hooks/useRouter";

const About = () => {
  const { push } = useRouter();
  return (
    <>
      <h1>About</h1>
      <button onClick={() => push("/")}>Home</button>
    </>
  );
};

export default About;
