import React from 'react';
import styled from 'styled-components';


const CardView = styled.div`
  display: block;
  background: #fff;
  width: 100%;
  height: 400px;
  margin-top: 1.5em;
  border: solid 1px #000;

  h1 {
    color: #46ce31 !important;
    font-weight: 700;
    letter-spacing: 0.15em;
    padding: 0.5em;
  }
`;



export class QiitaCard extends React.Component {

  render() {
     
    return (
      <CardView {...this.props}>
        {this.props.children}
      </CardView>
    );
  }
}
