import React from 'react';


export class TileCard extends React.Component {

  render() {
    const cardStyle = {
        background: "#F62459",
        width: "100%",
        height: "300px"
    };

    return (
        <div className="TitleCard" style={cardStyle}>
            {this.props.children}
        </div>
    );
  }
}
