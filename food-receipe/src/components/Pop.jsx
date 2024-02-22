import React, { useEffect, useState } from "react";
import "./Pop.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Pop = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=`
    );
    const data = await api.json();
    setPopular(data.meals);
    console.log(data);
  };

  return (
    <div>
      <div className="wrapper">
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "2rem",
          }}
        >
          {popular?.map((meals) => {
            return (
              <SplideSlide key={meals.id}>
                <div className="card">
                  <p>{meals.strMeal}</p>
                  <img src={meals.strMealThumb} alt={meals.strMeal} />
                  <div className="gradient"></div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default Pop;
