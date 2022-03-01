import React from 'react'
import styled from 'styled-components'
import SliderImg from '../components/SliderImg';
import Viewers from '../components/Viewers';

const Home = () => {
  return (
    <Container>
      <SliderImg />
      <Viewers />
    </Container>
  )
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw - 5px);
  
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 1;
    z-index: -1;
    background-position: center;
    background-size: cover;
    background: url('/images/home-background.png') center center no-repeat fixed;
  }
`;

export default Home