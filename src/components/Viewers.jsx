import React from 'react'
import styled from 'styled-components'

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="disney"/>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="disney"/>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="disney"/>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="disney"/>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="disney"/>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
`;
export default Viewers