import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { WebServiceCard } from './Components/WebServiceCard';
import { SectionHeading } from './Components/SectionHeading';


export class AppWebSection extends React.Component {

  render() {
    return (
        <div>
            <Row>
                <Col> 
                    <SectionHeading>Apps & Web</SectionHeading>
                </Col>
            </Row>
            <Row>
                <Col>
                    <WebServiceCard title="PINNA"/>
                </Col>
            </Row>
        </div>
    );
  }
}
