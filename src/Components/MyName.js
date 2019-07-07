import React from 'react';
import styled from 'styled-components';


const NameHeaderBackground = styled.div`
  background: #9AE0FF;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const NameHeader = styled.h1`
  font-size: 10rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  color: #FF4141;
  margin: 20px;

  @media screen and (max-width: 1199px) {
    font-size: 8rem;
  }

  @media screen and (max-width: 991px) {
    font-size: 6.5rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 4.7rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 4.2rem;
    width: 100%;
    overflow: hidden;
  }
`;


export class MyName extends React.Component {

  render() {
    return (
        <NameHeaderBackground>
            <NameHeader>Shota Shimazu</NameHeader>
        </NameHeaderBackground>
    );
  }
}
