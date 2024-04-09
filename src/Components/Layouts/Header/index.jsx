import { Fragment, useEffect } from "react";

import HeaderCartButton from "../HeaderCurtButton";
import mealsImage from "../../../assets/meals.jpg";
import classes from "./index.module.css";
import { memo } from "react";

const Header = () => {
  useEffect(() => {
    console.log("Header is rendering");
  });
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
