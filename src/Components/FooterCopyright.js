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

  @media (prefers-color-scheme: dark) {
    color: white;
    background: #1A1A1A;
  }
`;



export class FooterCopyright extends React.Component {

  render() {
    return (
        <CopyrightText>
            Copyright © 2018 to 2021 Shota Shimazu, All rights reserved.
        </CopyrightText>
    );
  }
}
