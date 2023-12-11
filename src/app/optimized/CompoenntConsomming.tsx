"use client";
import { useGlobalProvider } from "../my-provider";
import { useCountState, useCountUpdater } from "../my-provider-optimized";

export const ComponentIncrementDeep = () => {
  const increment = useCountUpdater();
  console.log("ComponentWith increment");
  return <button onClick={increment}>Hit me to increment </button>;
};

export const ComponentWithCount = () => {
  const count = useCountState();
  console.log("ComponentWith count render");
  return <h1>{count}</h1>;
};
