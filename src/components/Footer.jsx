import React from "react";
import styled from "styled-components";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
  IoMdHeart,
} from "react-icons/io";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterDiv>
        <div>
          <p>Help</p>
          <p>About Us</p>
          <p>Jobs</p>
          <p>Privacy Notice</p>
          <p>
            <span>
              <IoLogoTwitter />
            </span>
            <span>
              <IoLogoInstagram />
            </span>
            <span>
              <IoLogoFacebook />
            </span>
          </p>
        </div>
        <div>
          <Center>
            <GiKnifeFork />
            <Logo to={"/"}>
              <span>Cookfy</span>
            </Logo>
          </Center>
          <p>Find recipes to use ingredients you already have</p>
        </div>
        <div></div>
      </FooterDiv>
      <hr />
      <Copy>
        <p>
          &copy;{new Date().getFullYear()} Cookfy, Developed with
          <IoMdHeart /> by Abdulaziz Sadi
        </p>
      </Copy>
    </FooterWrapper>
  );
};

const Copy = styled.div`
  padding: 2rem 0rem;
  text-align: center;
  font-size: 0.85rem;
  svg {
    color: #68c087;
  }
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: #342914;
    font-weight: 700;
  }
  svg {
    font-size: 3rem;
    color: #68c087;
    cursor: pointer;
  }
`;
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 500;
`;
const FooterWrapper = styled.footer`
  background-color: #fafafa;
  padding: 1.2rem 0rem;
  width: 100%;
  hr {
    color: #fafafa;
  }
`;
const FooterDiv = styled.div`
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    color: #45515c;
    margin: 0.75rem 0rem;
  }
  span {
    margin: 0rem 0.25rem;
    svg {
      font-size: 1.25rem;
    }
  }
`;

export default Footer;
