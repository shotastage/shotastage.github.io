import React from 'react';
import { SHButton } from './Buttons';
import { TileCard } from './TileCard';
import images from '../images/pinna_start_screen.png';


export class WebServiceCard extends React.Component {


  render() {
    return (
        <TileCard>
          <h1>{this.props.title}</h1>
          <SHButton link="https://pinna-map.herokuapp.com" otherTab>GO TO PAGE</SHButton>
        </TileCard>
    );
  }
}
