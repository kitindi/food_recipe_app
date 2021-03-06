import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Grid, CuisineCard } from "../Styles/Styled";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);

  let params = useParams();

  useEffect(() => {
    getCiusine(params.type);
    console.log(params.type);
  }, [params.type]);

  const getCiusine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=5ffe37a5321b4725bf34cbd8e567a945&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };
  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      {cuisine.map((item) => {
        return (
          <CuisineCard key={item.id}>
            <Link to={`/recipe/${item.id}`}>
              <img src={item.image} alt="coiusine" />
              <h4>{item.title}</h4>
            </Link>
          </CuisineCard>
        );
      })}
    </Grid>
  );
};

export default Cuisine;
