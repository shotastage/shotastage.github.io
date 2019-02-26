import React from 'react';
import './FooterCopyright.css';


export class FooterCopyright extends React.Component {

  getCurrentYear() {
    var now   = new Date();       
    return now.getFullYear();
  }

  render() {
    return (
        <p>
            Copyright © 2018 to {this.getCurrentYear()} Shota Shimazu, All rights reserved.
        </p>
    );
  }
}
