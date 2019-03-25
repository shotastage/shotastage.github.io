import React from 'react';
import styled from 'styled-components';
import { SHButton } from './Buttons';


const CardView = styled.div`
  display: block;
  background: ${props => getTileColor(props)};
  width: 100%;
  height: 200px;
  border-radius: 20px;
  margin-top: 1.5em;
  box-shadow: 0 0 8px #afafaf;


  h1 {
    color: ${props => getTextColor(props)};
    font-weight: 700;
    letter-spacing: 0.15em;
    padding: 0.5em;
  }
`;


const getTileColor = props => {

  if (props.green) {
    return "#1ae097";
  }

  if (props.black) {
    return "#282828";
  }

  if (props.purple) {
    return "#9d7cc1";
  }

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

export class SocialCard extends React.Component {


  render() {

    return (
      <CardView {...this.props}>
        <CardHeading>{this.props.title}</CardHeading>
        <Description>{this.props.description}</Description>
        <Image src={this.props.imageURL} />
        <SHButton link={this.props.linkURL} black otherTab>GO TO PAGE</SHButton>
      </CardView>
    );
  }
}
