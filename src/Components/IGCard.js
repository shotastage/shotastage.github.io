import React from 'react';
import styled from 'styled-components';
import { IGCardButton } from './Buttons';



const CardView = styled.div`
  display: block;
  background: #fff;
  width: 100%;
  height: 400px;
  margin-top: 1.5em;
  border: solid 1px #000;

  h1 {
    color: #333 !important;
    font-weight: 700;
    letter-spacing: 0.15em;
    padding: 0.5em;
  }
`;



const CardHeading = styled.h1`
  margin-bottom: 0.1em;
  letter-spacing: 0.01em !important;
`;

const ImageWrap = styled.div`
  text-align: center;
  width: 100%;
  height: auto;
`;

const Image = styled.img`
  width: 40%;
`;


export class IGCard extends React.Component {

  render() {
     
    return (
      <CardView {...this.props}>
        {this.props.children}
      </CardView>
    );
  }
}



export class IGSocialCard extends React.Component {


  render() {

    return (
      <IGCard {...this.props}>
        <CardHeading>{this.props.title}</CardHeading>
        <ImageWrap>
          <Image src={this.props.imageURL} /> 
        </ImageWrap>
        <IGCardButton link={this.props.linkURL} black otherTab>GO TO PAGE</IGCardButton>
      </IGCard>
    );
  }
}


