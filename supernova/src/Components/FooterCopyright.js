import React from 'react';
import styled from 'styled-components';



const CopyrightText = styled.p`
  font-family: 'Roboto', sans-serif;
  width: 100%;
  text-align: center;
  letter-spacing: 0.1em;
  margin-top: 1em;
  margin-bottom: 1em;

  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export class FooterCopyright extends React.Component {

  getCurrentYear() {
    return new Date().getFullYear();      
  }

  render() {
    return (
        <CopyrightText>
            Copyright © 2018 to {this.getCurrentYear()} Shota Shimazu, All rights reserved.
        </CopyrightText>
    );
  }
}
