import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { WebServiceCard } from './Components/Cards/WebServiceCard';
import { SectionHeading } from './Components/SectionHeading';
import pinnaWritingImage from './images/pinna_writing.png';


export class AppWebSection extends React.Component {

  render() {

    const pinnaDescription = `
    PINNA is musical & geolocational web application. You can share your listening or watching on the Map.
    PINNA will be redeveloped as an native App more interactive and creative.
    `;


    const githubDescription = `
    Many open-sourced software are available on @shotastage Github.
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
                        description="Mini web apps collections that can deploy to Heroku and run on your own environment."
                        linkURL="https://github.com/shotastage/"
                    />
                </Col>

                <Col>
                    <WebServiceCard black
                        title="Github"
                        description={githubDescription}
                        linkURL="https://github.com/shotastage/"
                    />
                </Col>

                <Col>
                    <WebServiceCard resume
                        title="Other Works"
                        description="Other featured works that I've created."
                        linkURL="https://www.resume.id/shotastage"
                    />
                </Col>
            </Row>
        </div>
    );
  }
}
