import React from 'react';
import './Footer.scss';


export class Footer extends React.Component {


  render() {
    return (
        <div className="FooterBody">
            {this.props.children}
        </div>
    );
  }
}
