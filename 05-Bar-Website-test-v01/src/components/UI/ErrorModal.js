import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import Card from "./Card";
import classes from "../UI/ErrorModal.module.css";

const Backdrop = (props) => {
   return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onClick}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>

      {ReactDOM.createPortal(
        <Backdrop onClick={props.reset} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClick={props.reset}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;

/* <Fragment>
      <div className={classes.backdrop} onClick={props.reset} />
      <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.reset}>Okay</Button>
      </footer>
    </Card>
    </Fragment>
      */
