import { Fragment, useContext, useEffect } from "react";
import { createPortal } from "react-dom";

import classes from "./index.module.css";
import { ShowContext } from "../../../context/ShowContext";

const Backdrop = () => {
  const { closeCart } = useContext(ShowContext);
  return <div className={classes.backdrop} onClick={closeCart} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  useEffect(() => {
    console.log("Modal is rendering");
  });
  return (
    <Fragment>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
