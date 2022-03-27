import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/searched/${searchInput}`);
  };
  return (
    <FormStyle onSubmit={handleSubmit}>
      <FaSearch />
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin: 1.5rem 20rem;
  position: relative;
  width: 100%;
  input {
    width: 100%;
    border: none;
    background-color: #313131;
    font-size: 1.5rem;
    color: #fff;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
  }
  svg {
    position: absolute;
    left: 0%;
    top: 50%;
    transform: translate(100%, -50%);
    color: #fff;
  }
`;

export default Search;
