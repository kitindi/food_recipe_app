import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe = () => {
  const [fetchedDetail, setFetchedDetail] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  let params = useParams();

  const fetchDetail = async (id) => {
    const data = await fetch(
      `https:api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const recipeDetail = await data.json();

    setFetchedDetail(recipeDetail);
  };
  console.log(fetchedDetail);
  useEffect(() => {
    fetchDetail(params.id);
  }, [params.id]);

  return (
    <DetailWrapper>
      <div>
        <h2>{fetchedDetail.title}</h2>
        <img src={fetchedDetail.image} alt="" />
      </div>
      <Info>
        <StyledButton
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => {
            setActiveTab("instructions");
          }}
        >
          Instructions
        </StyledButton>
        <StyledButton
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => {
            setActiveTab("ingredients");
          }}
        >
          Ingredients
        </StyledButton>
        <Content>
          {activeTab === "instructions" && (
            <div>
              <h4
                dangerouslySetInnerHTML={{ __html: fetchedDetail.summary }}
              ></h4>
              <h4
                dangerouslySetInnerHTML={{ __html: fetchedDetail.instructions }}
              ></h4>
            </div>
          )}

          {activeTab === "ingredients" && (
            <div>
              <ul>
                {fetchedDetail.extendedIngredients.map((ingredient) => {
                  return <li key={ingredient.id}>{ingredient.original}</li>;
                })}
              </ul>
            </div>
          )}
        </Content>
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .active {
    background-color: #313131;
    color: #fff;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.05rem;
    font-weight: 500;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const StyledButton = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background-color: #fff;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 500;
  font-size: 1.05rem;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

const Content = styled.div`
  width: 35rem;
  padding: 1.2rem 0rem;
  h4 {
    line-height: 2rem;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
    text-align: justify;
  }
`;
export default Recipe;
