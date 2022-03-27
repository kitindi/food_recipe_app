import React from "react";
import styled from "styled-components";
import bannerImage from "../images/banner.jpg";

const Banner = (props) => {
  return <BannerDiv>{props.children}</BannerDiv>;
};

const BannerDiv = styled.div`
  width: 100%;
  height: 50vh;
  background-image: url(${bannerImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
export default Banner;
