import classes from "./index.module.css";

const Card = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
