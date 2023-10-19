import React, { createContext, useState } from "react";

export const EpgContext = createContext();
export function EpgProvider({ children }) {

  const [epgData, setEpgData] = useState({ refFirstScheduleLive: '' });

  return (
    <EpgContext.Provider value={{ epgData, setEpgData }}>
      { children }
    </EpgContext.Provider>

  )
}