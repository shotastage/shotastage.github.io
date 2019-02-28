import React from 'react';
import styled from 'styled-components';


const StyledFooter = styled.div`
  background: #fff !important;
  width: 100%;
`;

export class Footer extends React.Component {

  render() {

    return (
        <StyledFooter>
            {this.props.children}
        </StyledFooter>
    );
  }
}
