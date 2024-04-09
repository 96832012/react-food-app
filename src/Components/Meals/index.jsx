import { Fragment, useEffect } from "react";
import MealsSummary from "../MealsSummary";
import AvailableMeals from "../AvailableMeals";

const Meals = () => {
  useEffect(() => {
    console.log("Meals is rendering");
  });
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
