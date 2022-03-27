import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(input);
    setInput("");
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <FaSearch />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
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
