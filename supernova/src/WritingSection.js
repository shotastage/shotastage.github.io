import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SectionHeading } from './Components/SectionHeading';
import { TileCard } from './Components/TileCard';


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
                <TileCard pink>
                  <h1>Note</h1>
                </TileCard>
              </Col>
              <Col>
                <TileCard lightGreen>
                  <h1>Qiita</h1>
                </TileCard>
              </Col>
              <Col>
                <TileCard yellow>
                  <h1>Tumblr</h1>
                </TileCard>
              </Col>
            </Row>
        </div>
    );
  }
}
