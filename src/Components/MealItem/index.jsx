import { useContext } from "react";

import MealItemForm from "../MealItemForm";
import classes from "./index.module.css";
import { CartContext } from "../../context/CartContext";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm {...props} />
      </div>
    </li>
  );
};

export default MealItem;
