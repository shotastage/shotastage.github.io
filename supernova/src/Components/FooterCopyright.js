import React from 'react';
import './FooterCopyright.css';


export class FooterCopyright extends React.Component {

  getCurrentYear() {
    return new Date().getFullYear();      
  }

  render() {
    return (
        <p className="copyright_text">
            Copyright © 2018 to {this.getCurrentYear()} Shota Shimazu, All rights reserved.
        </p>
    );
  }
}
