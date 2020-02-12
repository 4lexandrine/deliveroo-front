import React from "react";

const Basket = ({ selectedMeals, setSelectedMeals, subTotal, setSubTotal }) => {
    const delivery = 2.5;
    return (
        <div className="basket">
            <button className="valider">Valider mon panier</button>
            {selectedMeals.length === 0 ?
                <div>
                    <p>Votre panier est vide</p>
                </div>
                :
                <>
                    {selectedMeals.map((selectedMeal, index) => {
                        return (
                            <div key={index} className="basket-content">
                                <div className="container-quantity">
                                    <button onClick={() => {
                                        const newSelectedMeals = [...selectedMeals]
                                        let price = newSelectedMeals[index].price
                                        subTotal = Number(subTotal) - Number(price);
                                        // console.log(quantity, price, subTotal);
                                        setSubTotal(subTotal)

                                        if (newSelectedMeals[index].quantity > 1) {

                                            newSelectedMeals[index].quantity--;
                                        } else {
                                            newSelectedMeals.splice(index, 1)
                                        }

                                        setSelectedMeals(newSelectedMeals)
                                    }} >-</button>
                                    <span className="quantity">{selectedMeal.quantity}</span>
                                    <button onClick={() => {
                                        const newSelectedMeals = [...selectedMeals]
                                        newSelectedMeals[index].quantity++
                                        let price = newSelectedMeals[index].price
                                        subTotal = Number(subTotal) + Number(price);

                                        // console.log(quantity, price, subTotal);

                                        setSubTotal(subTotal)
                                        setSelectedMeals(newSelectedMeals)
                                    }}>+</button></div>
                                <div className="title">{selectedMeal.title}</div>
                                <div className="price">
                                    {selectedMeal.price + " €"} </div>

                            </div>
                        )
                    })
                    }
                    <div className="addition-container">
                        <div className="subtotal-delivery">
                            <div className="sub-total">
                                <p>Sous-total</p>
                                <p>{Number(subTotal).toFixed(2)} €</p>
                            </div>
                            <div className="delivery">
                                <p>Frais de livraison</p>
                                <p>{delivery} €</p>
                            </div>
                        </div>
                        <div className="total">
                            <p>Total</p>
                            <p>{Number(delivery + subTotal).toFixed(2)} €</p>
                        </div>
                    </div>
                </>
            }

        </div>
    );
}

export default Basket;