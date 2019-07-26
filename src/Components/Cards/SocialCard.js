import React from 'react';
import styled from 'styled-components';


const CardView = styled.div`
  display: block;
  background: ${props => getTileColor(props)};
  width: 100%;
  height: 200px;
  border-radius: 20px;
  margin-top: 1.5em;
  box-shadow: 0 0 8px #afafaf;

  @media (prefers-color-scheme: dark) {
    box-shadow: none;
  }

  h1 {
    color: ${props => getTextColor(props)};
    font-weight: 700;
    letter-spacing: 0.15em;
    padding: 0.5em;
  }
`;


const getTileColor = props => {

  if (props.white) {
    return "#fff";
  }

  if (props.twitter) {
    return "#1ca1f2";
  }

  if (props.facebook) {
    return "#4267b2";
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

const CardHeading = styled.h1`
  margin-bottom: 0.1em;
  letter-spacing: 0.02em !important;
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

export class SocialCard extends React.Component {

  jump() {
  }

  render() {
    return (
      <CardView {...this.props} onClick={this.jump()}>
        <CardHeading>{this.props.title}</CardHeading>
        <Image src={this.props.imageURL} />
      </CardView>
    );
  }
}
