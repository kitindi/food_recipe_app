import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
export const Card = styled.div`
  min-height: 20rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    color: white;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100;
  background-color: linea-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0.6));
`;

// Cusine Styles

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.75rem 0rem;
`;
export const CuisineCard = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

// Link styles

export const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50%;
  height: 6rem;
  width: 6rem;
  transform: scale(0.9);
  margin: 0.5rem;
  background-color: #f4cb53;
  color: #fff;

  @media (max-width: 768px) {
    height: 5rem;
    width: 5rem;
    svg {
      font-size: 1.2rem;
    }
    h4 {
      font-size: 0.75rem;
    }
  }

  svg {
    font-size: 1.75rem;
    margin-bottom: 0.3rem;
  }
  &.active {
    background-color: #68c087;
    color: #fff;
    svg {
      color: #fff;
    }
    h4 {
      color: #fff;
    }
  }
`;
