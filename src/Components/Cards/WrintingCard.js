import React from 'react';
import styled from 'styled-components';
import { TileCard } from './TileCard';


const CardHeading = styled.h1`
  margin-bottom: 0.1em;
`;


const Description = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  letter-spacing: 1px;
  width: 90%;
  margin-left: 1em;
  color: #fff;
`;


const Image = styled.img`
  position: absolute;
  width: 70%;
  right: 2em;
  bottom: 1em;

  @media screen and (max-width: 767px) {
    width: 55%;
    bottom: 2rem;
  }

  @media screen and (max-width: 480px) {
    width: 55%;
    bottom: 2rem;
  }
`;

export class WritingCard extends React.Component {


  render() {

    return (
      <TileCard {...this.props}>
        <CardHeading>{this.props.title}</CardHeading>
        <Description>{this.props.description}</Description>
        <Image src={this.props.imageURL} />
      </TileCard>
    );
  }
}
