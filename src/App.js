import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MyName } from './Components/MyName';
import { FooterCopyright } from './Components/FooterCopyright';
import { Avator } from './Components/Avatar'
import { Navigation } from './Components/Navigation';

import { AppWebSection } from './AppWebSection';
import { WritingSection } from './WritingSection';
import { SocialSection } from './SocialSection';
import { Footer } from './Footer'
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
        <Bootstrap />
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
