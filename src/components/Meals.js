import React from "react";

const Meals = ({ title, description, price, popular, picture, selectedMeals, setSelectedMeals, subTotal, setSubTotal }) => {
    return (
        <div className="meal" onClick={() => {
            const newSelectedMeals = [...selectedMeals]
            let foundMeal = false;
            for (let i = 0; i < newSelectedMeals.length; i++) {
                if (newSelectedMeals[i].title === title) {
                    newSelectedMeals[i].quantity++;
                    foundMeal = true;
                }
            }
            if (foundMeal === false) {
                newSelectedMeals.push({ title: title, quantity: 1, price: price })
            }
            subTotal = Number(subTotal) + Number(price)
            setSubTotal(subTotal)
            setSelectedMeals(newSelectedMeals);

        }}>
            <div className="meal-description">
                <div>
                    <h3>{title}</h3>
                    <p>{description.length > 60 ? description.slice(0, 60) + "..." : description}</p>
                </div>
                <div>
                    <span className="price">{price}€</span>
                    <span className="popular">{popular && <span><i className="fas fa-star"></i>Populaire</span>}</span>
                </div>
            </div>
            {picture ? <img src={picture} alt={title} /> : ""}

        </div>
    );
}

export default Meals;