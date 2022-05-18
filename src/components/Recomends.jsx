import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Recomends = () => {
  return (
    <Container>
      <h4>Recomends for you</h4>
      <Content>
        <Wrap>
          <Link to='/'>
            <img src="https://cafetoons.net/wp-content/uploads/2020/08/the-owl-house-840x400.jpg" alt="the owl house" />
          </Link>
        </Wrap>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.27%;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;

  img {
    inset: 0;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0 40px 50px -16px, rgb(0 0 0 / 72%) 0 30px 22px -10px;
  }
`;

export default Recomends