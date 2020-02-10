import React from "react";

const Meals = ({ title, description, price, popular, picture }) => {
    return (
        <div className="meal">
            <div className="meal-description">
                <div>
                    <h3>{title}</h3>
                    <p>{description.length > 60 ? description.slice(0, 60) + "..." : description}</p>
                </div>
                <div>
                    <span className="price">{price}€</span>
                    <span className="popular">{popular && <span><i class="fas fa-star"></i>Populaire</span>}</span>
                </div>
            </div>
            {picture ? <img src={picture} alt="" /> : ""}

        </div>
    );
}

export default Meals;