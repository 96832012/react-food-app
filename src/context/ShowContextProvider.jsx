import React, { useCallback, useState } from "react";
import { ShowContext } from "./ShowContext";

const ShowContextProvider = ({ children }) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = useCallback(() => {
    setCartIsShown(true);
  });

  const hideCartHandler = useCallback(() => {
    setCartIsShown(false);
  });

  const showContext = {
    state: cartIsShown,
    openCart: showCartHandler,
    closeCart: hideCartHandler,
  };
  return (
    <ShowContext.Provider value={showContext}>{children}</ShowContext.Provider>
  );
};

export default ShowContextProvider;
