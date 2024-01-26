import React, { createContext, useState } from "react";

export const DimmedScreenContext = createContext();

export const DimmedScreenProvider = ({ children }) => {
  const [isScreenDimmed, setIsScreenDimmed] = useState(false);

  const dimScreen = () => {
    setIsScreenDimmed(true);
  };

  const undimScreen = () => {
    setIsScreenDimmed(false);
  };

  return (
    <DimmedScreenContext.Provider
      value={{ isScreenDimmed, dimScreen, undimScreen }}
    >
      {children}
    </DimmedScreenContext.Provider>
  );
};
