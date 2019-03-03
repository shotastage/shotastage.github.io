import React from 'react';
import styled from 'styled-components';



const CardView = styled.div`
  display: block;
  background: ${props => getTileColor(props)};
  width: 100%;
  height: 400px;
  margin-top: 1.5em;

  h1 {
    color: ${props => getTextColor(props)};
    font-weight: 700;
    letter-spacing: 0.15em;
    padding: 0.5em;
  }
`;


const getTileColor = props => {
  if (props.pink) {
    return "#ff3d3d";
  }

  if (props.green) {
    return "#1ae097";
  }

  if (props.qiitaGreen) {
    return "#45ff28";
  }

  if (props.yellow) {
    return "#FFB94E";
  }

  if (props.black) {
    return "#282828";
  }

  if (props.tumblrBlack) {
    return "#001835";
  }

  if (props.purple) {
    return "#9d7cc1";
  }

  if (props.white) {
    return "#fff";
  }

  return "#ff3d3d";
}



const getTextColor = props => {
  if (props.white) {
    return "#333";
  }

  if (props.qiitaTextColor) {
    return "#46ce31 !important";
  }

  return "#fff";
}


export class TileCard extends React.Component {

  render() {
     
    return (
      <CardView {...this.props}>
        {this.props.children}
      </CardView>
    );
  }
}
