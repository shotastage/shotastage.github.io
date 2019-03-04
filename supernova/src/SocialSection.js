import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SocialCard } from './Components/SocialCard';
import { IGSocialCard } from './Components/IGCard';
import { SectionHeading } from './Components/SectionHeading';


export class SocialSection extends React.Component {

  render() {

    return (
        <div>
            <Row>
                <Col> 
                    <SectionHeading>Social</SectionHeading>
                </Col>
            </Row>
            <Row>
                <Col>
                    <IGSocialCard instagram
                        title="Instagram"
                        description="Other featured works that I've created."
                        linkURL="https://instagram.com/shotastage/"
                    />
                </Col>

                <Col>
                    <SocialCard twitter
                        title="Twitter"
                        description="Other featured works that I've created."
                        linkURL="https://twitter.com/shotastage/"
                    />
                </Col>

                <Col>
                    <SocialCard facebook
                        title="Facebook"
                        description="Other featured works that I've created."
                        linkURL="https://facebook.com/shotastage/"
                    />
                </Col>
            </Row>
        </div>
    );
  }
}
