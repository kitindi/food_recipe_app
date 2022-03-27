import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, CuisineCard } from "../Styles/Styled";

const Searched = () => {
  const [searchedFlavour, setSearchedFlavour] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
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
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </CuisineCard>
        );
      })}
    </Grid>
  );
};

export default Searched;
