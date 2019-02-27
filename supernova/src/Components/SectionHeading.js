import React from 'react';
import './SectionHeading.scss';


export class SectionHeading extends React.Component {

  render() {
    return (
        <h1 className="SectionHeading">{this.props.children}</h1>
    );
  }
}
