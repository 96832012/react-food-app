import React, { createContext } from "react";

export const ShowContext = createContext({
  state: false,
  openCart: () => {},
  closeCart: () => {},
});
