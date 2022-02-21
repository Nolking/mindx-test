import React from 'react'
import Meal from './Meal'
export default function MealList(props) {
    return (
        <ul className="meal-list">
         {props.meals.map((meal) => (
            <Meal
            key = {meal.id}
            area={meal.area}
            category={meal.category}
            ingredients={meal.ingredients}
            name={meal.name}
            instruction={meal.instruction}


            />
        ))}
        </ul>
    )
}