import React from 'react';
import styled from 'styled-components';



const CardView = styled.div`
  display: block;
  ${props => getTileColor(props)}
  width: 100%;
  height: 400px;
  margin-top: 1.5em;

  h1 {
    color: #fff;
    font-weight: 700;
    letter-spacing: 0.15em;
    padding: 0.5em;
  }
`;


const getTileColor = props => {
  if (props.pink) {
    return `
      background: #ff75b3;
    `
  }

  if (props.lightGreen){
    return `
      background: #36D7B7;
    `
  }

  if (props.yellow){
    return `
      background: #FFB94E;
    `
  }
}


export class TileCard extends React.Component {

  render() {

    if (this.props.pink) {
      return (
        <CardView pink>
            {this.props.children}
        </CardView>
      );
    } else if (this.props.lightGreen) {
      return (
        <CardView lightGreen>
            {this.props.children}
        </CardView>
      );
    } else if (this.props.yellow) {
      return (
        <CardView yellow>
          {this.props.children}
        </CardView>
      );
    }
    return (
      <CardView pink>
        {this.props.children}
      </CardView>
    );
  }
}
