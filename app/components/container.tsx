import { FC, ReactNode } from "react";

export const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        margin: "0 auto",
        position: "relative",
        maxWidth: "1440px",
      }}
    >
      {children}
    </div>
  );
};
