import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";

const SliderImg = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidersToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Carousel {...setting}>
      <Wrap>
        <NavLink to='/'>
          <img src="/images/slider-badag.jpg" alt="onward" />
        </NavLink>
      </Wrap>
      <Wrap>
        <NavLink to='/'>
          <img src="/images/slider-badging.jpg" alt="onward" />
        </NavLink>
      </Wrap>
      <Wrap>
        <NavLink to='/'>
          <img src="/images/slider-scale.jpg" alt="onward" />
        </NavLink>
      </Wrap>
      <Wrap>
        <NavLink to='/'>
          <img src="/images/slider-scales.jpg" alt="onward" />
        </NavLink>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5px;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &::before {
      font-size: 10px;
      color: rgb(150, 150, 171);
    }
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  /* .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  } */
`
const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  
  a {
    cursor: pointer;
    padding: 4px;
    display: block;
    position: relative;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;

    img {
      height: 100%;
      width: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.6);
      transition-duration: 300ms;
    }
  }
`;


export default SliderImg;
