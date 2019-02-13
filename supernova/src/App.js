import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class App extends React.Component {


  render() {
    return (
      <Container>
        <Row>
          <Col xs="6">
            <h1>Shota Shimazu</h1>
          </Col>
          <Col xs="6">.col-6</Col>
        </Row>
        <Row>
          <Col>
            <p>Copyright © 2018-2019 Shota Shimazu, All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default App;
