import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MyName } from './Components/MyName';
import { FooterCopyright } from './Components/FooterCopyright';
import { Avator } from './Components/Avatar'
import { Navigation } from './Components/Navigation';
import { InstagramFrame } from './Components/InstagramFrame';
import './App.scss';



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
              <h1>Instagram</h1>
              <InstagramFrame />
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>Services</h1>
            </Col>
          </Row>
          <div>
            <Row>
              <Col> 
                <h1>Web Sites</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <a href="https://pinna-map.herokuapp.com">PINNA</a>
              </Col>
            </Row>
          </div>
          <Row>
            <Col>
              <FooterCopyright />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default App;
