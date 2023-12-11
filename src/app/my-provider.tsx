"use client";
import { createContext, useContext, useMemo, useState } from "react";

type GlobalProviderType = {
  count: number;
  increment: () => void;
  RANDOM: string;
};

const GlobalProvider = createContext<GlobalProviderType>({
  count: 0,
  increment: () => {},
  RANDOM: "",
});

export const GlobalProviderWrapper = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [count, setCount] = useState(0);
  const RANDOM = "TEST";

  const value = useMemo(() => {
    return {
      count,
      increment: () => {
        setCount((prev) => prev + 1);
      },
      RANDOM,
    };
  }, [count, setCount]);
  return (
    <GlobalProvider.Provider value={value}>{children}</GlobalProvider.Provider>
  );
};

export const useGlobalProviderSelect = () => {
  const { RANDOM } = useContext(GlobalProvider);

  return RANDOM;
};

export const useGlobalProvider = () => {
  return useContext(GlobalProvider);
};
