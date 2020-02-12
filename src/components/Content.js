import React from "react";
import Meals from "./Meals";

const Content = ({ name, meals, selectedMeals, setSelectedMeals, subTotal, setSubTotal }) => {
    return (
        <>
            {meals.length > 0 &&
                <h2>{name}</h2>}
            <div className="meal-container">
                {meals.map((meal, index) => {
                    return <Meals key={index} {...meal} selectedMeals={selectedMeals} setSelectedMeals={setSelectedMeals} subTotal={subTotal} setSubTotal={setSubTotal} />
                })}
            </div>
        </>
    );
}

export default Content;
