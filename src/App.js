import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Basket from "./components/Basket"

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true)


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
          <Header name={data.restaurant.name} description={data.restaurant.description} picture={data.restaurant.picture} />
          <div className="container">

            <div className="section">
              {data.categories.map((category, index) => {
                return <Content name={category.name} meals={category.meals} />
              })}
            </div>
            <Basket />
          </div>
        </>
      }
    </>
  );
}

export default App;

