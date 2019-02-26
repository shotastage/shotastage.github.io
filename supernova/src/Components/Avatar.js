import React from 'react';
import './Avatar.scss';


export class Avator extends React.Component {

  render() {

    const imgURL = "https://pbs.twimg.com/profile_images/899687993476227075/RzQkQVwS_400x400.jpg";

    const altText = "My Profile Photo";

    return (
        <div className="wrap">
            <img className="avatar_image" src={imgURL} alt={altText}/>
        </div>
    );
  }
}
