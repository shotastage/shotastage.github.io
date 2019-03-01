import React from 'react';
import styled from 'styled-components';



const BaseButton = styled.a`
    background: transparent;
    color: #333;
    font-weight: bold;
    text-decoration: none !important;
    padding: 0.7em;
    border: 0.3em solid #333;
`;


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
