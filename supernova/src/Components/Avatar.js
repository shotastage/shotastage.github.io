import React from 'react';
import styled from 'styled-components';


const AvatarWrap = styled.div`
  max-width: 50%;
  margin: 0 auto;
`;

const AvatarImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50% !important;
  margin: 20px;

  @media screen and (max-width: 480px) {
    width: 220px;
    height: 220px;
  }
`;


export class Avator extends React.Component {

  render() {

    const imgURL = "https://pbs.twimg.com/profile_images/899687993476227075/RzQkQVwS_400x400.jpg";

    const altText = "My Profile Photo";

    return (
        <AvatarWrap>
            <AvatarImg src={imgURL} alt={altText}/>
        </AvatarWrap>
    );
  }
}
