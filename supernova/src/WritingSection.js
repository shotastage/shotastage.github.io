import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { SectionHeading } from './Components/SectionHeading';
import { QiitaCard } from './Components/QiitaCard';
import { WritingCard } from './Components/WrintingCard';
import { QiitaCardButton } from './Components/Buttons';



const CardHeading = styled.h1`
  margin-bottom: 0.1em;
`;


const Description = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  letter-spacing: 1px;
  width: 90%;
  margin-left: 1em;
  color: #333;
`;


const Image = styled.img`
  position: absolute;
  width: 70%;
  right: 2em;
  bottom: 1em;

  @media screen and (max-width: 767px) {
    width: 55%;
    bottom: 2rem;
  }

  @media screen and (max-width: 480px) {
    width: 55%;
    bottom: 2rem;
  }
`;


export class QiitaWritingCard extends React.Component {
  render() {
    return (
      <QiitaCard {...this.props}>
      <CardHeading>{this.props.title}</CardHeading>
      <Description>{this.props.description}</Description>
      <Image src={this.props.imageURL} />
      <QiitaCardButton link={this.props.linkURL} black otherTab>GO TO PAGE</QiitaCardButton>
    </QiitaCard>
    );
  }
}

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
                <WritingCard noteGreen
                  title="Note"
                  description="かなり抽象的な話題を真面目に語っています."
                  linkURL="https://note.mu/shotastage/"
                />
              </Col>
              <Col>
                <WritingCard tumblrBlack
                  title="Tumblr"
                  description="色々な事を徒然に語っています."
                  linkURL="https://www.tumblr.com/blog/shotastage"
                />
              </Col>
              <Col>
                <QiitaWritingCard
                  title="Qiita"
                  description="プログラミングに関する技術に関して投稿しています. This blog is written in Japanese."
                  linkURL="https://qiita.com/shotastage"
                />
              </Col>
            </Row>
        </div>
    );
  }
}
