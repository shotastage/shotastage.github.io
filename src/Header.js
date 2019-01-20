import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './Header.css';



class Header extends Component {
  render() {
    return (
      <Jumbotron>
        <h1 className="display-3 sh_header_name">Shota<br />Shimazu</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    );
  }
}

export default Header;
