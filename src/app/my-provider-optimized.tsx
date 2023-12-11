"use client";
import { createContext, useState, useContext, useCallback } from "react";

const CountStateContext = createContext<number>(0);
const CountUpdaterContext = createContext<() => {}>(() => {
  //
});

function CountProvider({ children }: { children: React.ReactElement }) {
  const [count, setCount] = useState(0);
  return (
    <CountStateContext.Provider value={count}>
      <CountUpdaterContext.Provider value={setCount}>
        {children}
      </CountUpdaterContext.Provider>
    </CountStateContext.Provider>
  );
}

function useCountState() {
  const countState = useContext(CountStateContext);
  if (typeof countState === "undefined") {
    throw new Error("useCountState must be used within a CountProvider");
  }
  return countState;
}

function useCountUpdater() {
  const setCount = useContext(CountUpdaterContext);
  if (typeof setCount === "undefined") {
    throw new Error("useCountUpdater must be used within a CountProvider");
  }
  const increment = useCallback(() => setCount((c) => c + 1), [setCount]);
  return increment;
}

export { CountProvider, useCountState, useCountUpdater };
