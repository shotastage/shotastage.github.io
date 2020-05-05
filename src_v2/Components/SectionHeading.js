import React from 'react';
import styled from 'styled-components';


const HeadingView = styled.h1`
  font-weight: bold;
  font-size: 4rem;
  margin-top: 1em;
  margin-bottom: 0.4em;
  letter-spacing: 0.07em;
  background: #fff;


  @media (prefers-color-scheme: dark) {
    background: #1A1A1A;
  }
`;


export class SectionHeading extends React.Component {

  render() {

    return (
        <HeadingView>{this.props.children}</HeadingView>
    );
  }
}
