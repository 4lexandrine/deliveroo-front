import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Basket from "./components/Basket"

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [subTotal, setSubTotal] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://deliveroo-back.herokuapp.com/"
      );
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? <p>Loading...</p> :
        <>
          <Header {...data.restaurant} />
          <div className="container">
            <div className="section">
              {data.categories.map((category, index) => {
                return <Content key={index} name={category.name} meals={category.meals} selectedMeals={selectedMeals} setSelectedMeals={setSelectedMeals}  subTotal={subTotal} setSubTotal={setSubTotal} />
              })}
            </div>
            <Basket selectedMeals={selectedMeals} setSelectedMeals={setSelectedMeals} subTotal={subTotal} setSubTotal={setSubTotal} />
          </div>
        </>
      }
    </>
  );
}

export default App;