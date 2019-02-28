import React from 'react';
import styled from 'styled-components';


const TitleCard = styled.div`
  background: #F62459;
  width: 100%;
  height: 300px;

  h1 {
    color: #fff;
    font-weight: 700;
    letter-spacing: 0.15em;
    padding: 0.5em;
  }
`;



export class TileCard extends React.Component {

  render() {

    return (
        <TitleCard>
            {this.props.children}
        </TitleCard>
    );
  }
}
