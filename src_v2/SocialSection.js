import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SocialCard } from './Components/Cards/SocialCard';
import { IGSocialCard } from './Components/Cards/IGCard';
import { SectionHeading } from './Components/SectionHeading';
import instagramImage from './images/IGLogo.svg';
import twitterImage from './images/twitter.svg';
import fbImage from './images/fb.svg';



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
                    <IGSocialCard
                        title="Instagram"
                        imageURL={instagramImage}
                        description="Instagram Account"
                        linkURL="https://instagram.com/shotastage/"
                    />
                </Col>

                <Col>
                    <SocialCard twitter
                        title="Twitter"
                        imageURL={twitterImage}
                        description="My Twitter profile."
                        linkURL="https://twitter.com/shotastage/"
                    />
                </Col>

                <Col>
                    <SocialCard facebook
                        title="Facebook"
                        imageURL={fbImage}
                        description="My Facebook profile."
                        linkURL="https://facebook.com/shotastage/"
                    />
                </Col>
            </Row>
        </div>
    );
  }
}
