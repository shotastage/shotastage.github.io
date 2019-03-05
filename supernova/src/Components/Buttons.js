import React from 'react';
import styled from 'styled-components';



const BaseButton = styled.a`
    position: absolute;
    background: transparent;
    color: ${props => baseColor(props)} !important;
    font-weight: bold;
    font-size: 1.1rem;
    text-align: center;
    text-decoration: none !important;
    padding: 0.7em;
    border: 0.25em solid ${props => baseColor(props)};
    margin: 1.4em;
    bottom: 0em;

    // Animation
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
	  transition: all .3s;

  
    :hover {
      color: ${props => oppositeColor(props)} !important;
      letter-spacing: 0.1em;
      background: ${props => baseColor(props)};
    }
`;


const oppositeColor　= props => {
  if (props.black) {
    return "#fff"
  }

  if (props.white){
    return "#333"
  }

  return "#333"
}

const baseColor = props => {
  if (props.black) {
    return "#333"
  }

  if (props.white){
    return "#fff"
  }

  return "#fff"
}

export class SHButton extends React.Component {

  render() {
    if (this.props.otherTab) {
        return (
            <BaseButton href={this.props.link} target="_blank">{this.props.children}</BaseButton>
        );
    }

    return (
        <BaseButton href={this.props.link} >{this.props.children}</BaseButton>
    );
  }
}





const QiitaButton = styled(BaseButton)`
    color: #333 !important;
    border: 0.25em solid #333;

    :hover {
      color: #fff !important;
      background: #333;
    }
`;


export class QiitaCardButton extends React.Component {

  render() {
    return (
      <QiitaButton href={this.props.link} target="_blank">{this.props.children}</QiitaButton>
    );
  }
}







const IGButton = styled(QiitaButton)`
  color: #ca0387 !important;
  border: 0.25em solid #d70463;

  :hover {
    color: #fff;
    background: #d70463;
  }
`;



export class IGCardButton extends React.Component {

  render() {
    return (
      <IGButton href={this.props.link} target="_blank">{this.props.children}</IGButton>
    );
  }
}
