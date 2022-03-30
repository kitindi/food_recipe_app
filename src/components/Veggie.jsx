import React, { useEffect, useState } from "react";
import { Gradient, Card, Wrapper } from "../Styles/Styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Link } from "react-router-dom";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);
  useEffect(() => {
    getVeggie();
  }, []);
  const getVeggie = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=5ffe37a5321b4725bf34cbd8e567a945&number=9&tags=vegetarian`
    );
    const data = await api.json();

    setVeggie(data.recipes);
  };
  return (
    <div>
      <Wrapper>
        <h3>Our Vegetarian Picks</h3>

        <Splide
          options={{
            perPage: 4,
            breakpoints: {
              767: {
                perPage: 2,
              },
              640: {
                perPage: 1,
              },
            },
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "2.5rem",
          }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={`/recipe/${recipe.id}`}>
                    <p>{recipe.title}</p>

                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

export default Veggie;
