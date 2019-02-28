import React from 'react';


export class SectionHeading extends React.Component {

  render() {

    const headingStyle = {
      fontWeight: "bold",
      fontSize: "4rem",
      marginTop: "1em",
      marginBottom: "0.4em"    
    };


    return (
        <h1 style={headingStyle}>{this.props.children}</h1>
    );
  }
}
