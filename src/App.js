import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MyName } from './Components/MyName';
import { FooterCopyright } from './Components/FooterCopyright';
import { Avator } from './Components/Avatar'
import { Navigation } from './Components/Navigation';

import { AppWebSection } from './AppWebSection';
import { WritingSection } from './WritingSection';
import { SocialSection } from './SocialSection';
import { Footer } from './Footer';
import { Initial } from './Initial';
import { Bootstrap } from './Themes/Bootstrap';

import './App.scss';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: "#fff"
    }

    this.changeColor();
  }

  changeColor() {

    let current = new Date().getHours();

    if (current >= 19) {
      this.setState({
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Initial/>
        <Bootstrap/>
        <Navigation/>
        <Container>
          <Row>
            <Col sm={8}>
              <MyName />
            </Col>
            <Col sm={4}>
              <Avator />
            </Col>
          </Row>

          <AppWebSection/>
          <WritingSection/>
          <SocialSection/>

          <Row>
            <Col>
              <Footer>
                <FooterCopyright/>
              </Footer>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}


export default App;
