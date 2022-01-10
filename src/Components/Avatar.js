import React from 'react';
import styled from 'styled-components';


const AvatarWrap = styled.div`
  max-width: 50%;
  margin: 0 auto;

  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;

const AvatarImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50% !important;
  margin: 20px;

  @media screen and (max-width: 480px) {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    margin-top: 30px;
  }
`;


export class Avator extends React.Component {

  render() {

    const imgURL = "https://pbs.twimg.com/profile_images/1414945557999665161/W_ccWI58_400x400.jpg";

    const altText = "My Profile Photo";

    return (
        <AvatarWrap>
            <AvatarImg src={imgURL} alt={altText}/>
        </AvatarWrap>
    );
  }
}
