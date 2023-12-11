"use client";
export const ComponentDeep = ({
  children,
  number,
}: {
  number: number;
  children: React.ReactElement;
}) => {
  console.log("Component deep shouldnt rerender when provider change ", number);
  return <div>{children}</div>;
};
