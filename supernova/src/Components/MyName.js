import React from 'react';
import styled from 'styled-components';


const NameHeaderBackground = styled.div`
  background: #9AE0FF;
`;

const NameHeader = styled.h1`
  font-size: 10rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  color: #FF4141;
  margin: 20px;

  @media screen and (max-width: 480px) {
    font-size: 5rem;
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
