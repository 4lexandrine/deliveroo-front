import React from "react";
import Meals from "./Meals";

const Content = ({ name, meals }) => {
    return (
        <>
            <h2>{meals.length > 0 && name}</h2>
            <div className="meal-container">
                {meals.map((meal, index) => {
                    return <Meals key={index} title={meal.title} description={meal.description} price={meal.price} picture={meal.picture} popular={meal.popular} />
                })}
            </div>
        </>
    );
}

export default Content;
