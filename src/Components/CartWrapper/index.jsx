import React, { useContext, useEffect } from "react";
import { ShowContext } from "../../context/ShowContext";
import Cart from "../Cart";

function CartWrapper() {
  useEffect(() => {
    console.log("Wrapper is rendering");
  });
  const { state } = useContext(ShowContext);

  return state ? <Cart /> : null;
}

export default CartWrapper;
