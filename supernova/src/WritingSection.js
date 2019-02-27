import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SectionHeading } from './Components/SectionHeading';


export class WritingSection extends React.Component {

  render() {
    return (
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
    );
  }
}
