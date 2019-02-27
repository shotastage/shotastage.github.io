import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MyName } from './Components/MyName';
import { FooterCopyright } from './Components/FooterCopyright';
import { Avator } from './Components/Avatar'
import { Navigation } from './Components/Navigation';
import { InstagramFrame } from './Components/InstagramFrame';
import { SectionHeading } from './Components/SectionHeading';
import { WebServiceCard } from './Components/WebServiceCard';

import { Footer } from './Footer'
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
              <SectionHeading>Instagram</SectionHeading>
              <InstagramFrame />
            </Col>
          </Row>
          <Row>
            <Col>
              <SectionHeading />
            </Col>
          </Row>
          <div>
            <Row>
              <Col> 
                <SectionHeading>Services</SectionHeading>
              </Col>
            </Row>
            <Row>
              <Col>
                <WebServiceCard/>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col> 
                <SectionHeading>Writings</SectionHeading>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1>Note</h1>
              </Col>
              <Col>
                <h1>Qiita</h1>
              </Col>
              <Col>
                <h1>Tumblr</h1>
              </Col>
            </Row>
          </div>
          <Row>
            <Col>
            <Footer/>
              <FooterCopyright />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default App;
