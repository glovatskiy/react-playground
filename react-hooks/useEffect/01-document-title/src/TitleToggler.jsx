import { useState, useEffect } from "react";

export const TitleToggler = () => {
  const [toggle, setToggle] = useState(true);
  const [count, setCount] = useState(0);
  function changeToggle() {
    setToggle(!toggle);
  }
  function add() {
    setCount((count) => count + 1);
  }

  useEffect(() => {
    document.title = toggle ? "Log in" : "Dashboard";
  }, [toggle]);

  useEffect(() => {
    console.log("Title is changed");
  }, [toggle]);

  return (
    <>
      <h2>Title is: {toggle ? "Log in" : "Dashboard"}</h2>
      <h2>Count: {count}</h2>
      <button onClick={changeToggle}>Change Title</button>
      <button onClick={add}>Add</button>
    </>
  );
};
