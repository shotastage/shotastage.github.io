import React from 'react';
import './Avatar.scss';


export class Avator extends React.Component {

  render() {

    const imgURL = "https://pbs.twimg.com/profile_images/899687993476227075/RzQkQVwS_400x400.jpg";

    const altText = "My Profile Photo";

    return (
        <div className="AvatarWrap">
            <img className="AvatarImage" src={imgURL} alt={altText}/>
        </div>
    );
  }
}
