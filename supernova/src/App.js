import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { MyName } from './Components/MyName';
import { FooterCopyright } from './Components/FooterCopyright';

class App extends React.Component {


  render() {
    return (
      <Container>
        <Row>
          <Col xs="6">
            <MyName></MyName>
          </Col>
          <Col xs="6">BLANK</Col>
        </Row>
        <Row>
          <Col>
            <FooterCopyright></FooterCopyright>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default App;
