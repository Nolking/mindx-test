import React from 'react';
import classes from "./Meal.module.css"
import { Card } from 'antd';


const Meal = (props) => {
    return (
      <Card className={classes.meal}>
        <h2>{props.name}</h2>
        <h3 className={classes.mealCategory}>{props.category}</h3>
        <h3 className={classes.mealIngredients}>{props.ingredients}</h3>
        <p className={classes.mealInstruction}>{props.instruction}</p>
      </Card>
    );
  };
  
  export default Meal;
  