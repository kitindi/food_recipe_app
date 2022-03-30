import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Grid, CuisineCard } from "../Styles/Styled";

const Searched = () => {
  const [searchedFlavour, setSearchedFlavour] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=5ffe37a5321b4725bf34cbd8e567a945&query=${name}`
    );
    const recipes = await data.json();
    setSearchedFlavour(recipes.results);
  };

  useEffect(() => {
    getSearched(params.input);
  }, [params.input]);

  return (
    <Grid>
      {searchedFlavour.map((item) => {
        return (
          <CuisineCard key={item.id}>
            <Link to={`/recipe/${item.id}`}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </CuisineCard>
        );
      })}
    </Grid>
  );
};

export default Searched;
