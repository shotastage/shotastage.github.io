import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SectionHeading } from './Components/SectionHeading';
import { InstagramFrame } from './Components/InstagramFrame';


export class IGOpenShow extends React.Component {

  render() {
    return (
        <Row>
            <Col>
              <SectionHeading>Instagram</SectionHeading>
              <InstagramFrame/>
            </Col>
        </Row>
    );
  }
}
