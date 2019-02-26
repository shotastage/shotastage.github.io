import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MyName } from './Components/MyName';
import { FooterCopyright } from './Components/FooterCopyright';
import { Avator } from './Components/Avatar'
import { Navigation } from './Components/Navigation';



class App extends React.Component {

  render() {
    return (
      <div>
      <Navigation/>
      <Container>
        <Row>
          <Col>
            <MyName />
          </Col>
          <Col>
            <Avator />
          </Col>
        </Row>
        <Row>
          <Col>
            <p>テストです</p>
            <FooterCopyright />
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}


export default App;
