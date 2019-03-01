import React from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import { SHButton } from './Buttons';
import { TileCard } from './TileCard';
import images from '../images/pinna_start_screen.png';


const CardHeading = styled.h1`
  margin-bottom: 0.1em;
`;



export class WebServiceCard extends React.Component {

  // <Image src={images} rounded fluid /> 

  render() {
    return (
        <TileCard>
          <CardHeading>{this.props.title}</CardHeading>
          <p>TJHIS SHISHI SHISH SI SHIHSI SIHIS</p>
          <SHButton link="https://pinna-map.herokuapp.com" otherTab>GO TO PAGE</SHButton>
        </TileCard>
    );
  }
}
