import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { WebServiceCard } from './Components/WebServiceCard';
import { SectionHeading } from './Components/SectionHeading';
import pinnaWritingImage from './images/pinna_writing.png';


export class AppWebSection extends React.Component {

  render() {

    const pinnaDescription = `
    PINNA is musical & geolocational web application. You can share your listening or watching on the Map.
    `;

    return (
        <div>
            <Row>
                <Col> 
                    <SectionHeading>Apps & Web</SectionHeading>
                </Col>
            </Row>
            <Row>
                <Col>
                    <WebServiceCard
                        title="PINNA"
                        description={pinnaDescription}
                        imageURL={pinnaWritingImage}
                        linkURL="https://pinna-map.herokuapp.com"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <WebServiceCard purple
                        title="Deploy to Heroku"
                        description="Mini web apps that can deploy to heroku."
                        linkURL="https://google.co.jp"
                    />
                </Col>

                <Col>
                    <WebServiceCard black
                        title="Github"
                        description="Many open-sourced software are available on @shotastage Github."
                        linkURL="https://github.com/shotastage/"
                    />
                </Col>

                <Col>
                    <WebServiceCard green
                        title="Other Works"
                        description="Other featured works that I've created."
                        linkURL="https://google.co.jp"
                    />
                </Col>
            </Row>
        </div>
    );
  }
}
