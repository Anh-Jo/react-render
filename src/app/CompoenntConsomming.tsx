"use client";
import { useGlobalProvider } from "./my-provider";

export const ComponentIncrementDeep = () => {
  const { increment } = useGlobalProvider();
  console.log("ComponentWith increment");
  return <button onClick={increment}>Hit me to increment </button>;
};

export const ComponentWithCount = () => {
  const { count } = useGlobalProvider();
  console.log("ComponentWith count render");
  return <h1>{count}</h1>;
};

export const ComponentWithCountRANDOM = () => {
  const { RANDOM } = useGlobalProvider();
  console.log("ComponentWith count ComponentWithCountRANDOM");
  return <h1>hello</h1>;
};
