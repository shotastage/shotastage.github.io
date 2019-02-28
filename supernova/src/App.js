import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MyName } from './Components/MyName';
import { FooterCopyright } from './Components/FooterCopyright';
import { Avator } from './Components/Avatar'
import { Navigation } from './Components/Navigation';
import { InstagramFrame } from './Components/InstagramFrame';
import { SectionHeading } from './Components/SectionHeading';

import { AppWebSection } from './AppWebSection';
import { WritingSection } from './WritingSection';
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
              <InstagramFrame/>
            </Col>
          </Row>
          <Row>
            <Col>
              <SectionHeading/>
            </Col>
          </Row>
          <AppWebSection/>
          <WritingSection/>

          <Row>
            <Col>
              <Footer>
                <FooterCopyright/>
              </Footer>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default App;
