import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { SectionHeading } from './Components/SectionHeading';
import { QiitaCard } from './Components/Cards/QiitaCard';
import { WritingCard } from './Components/Cards/WrintingCard';
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
    </QiitaCard>
    );
  }
}

export class SkillSection extends React.Component {

  render() {
    return (
        <div>
            <Row>
              <Col>
                <SectionHeading>Skills</SectionHeading>
              </Col>
            </Row>
            <Row>
              <Col lg="4">
                <WritingCard noteGreen
                  title="Web"
                  description="かなり抽象的な話題を真面目に語っています."
                  linkURL="https://note.mu/shotastage/"
                />
              </Col>
              <Col lg="4">
                <WritingCard tumblrBlack
                  title="Swift"
                  description="色々な事を徒然に語っています."
                  linkURL="https://www.tumblr.com/blog/shotastage"
                />
              </Col>
              <Col lg="4">
                <QiitaWritingCard
                  title="Go"
                  description="プログラミングに関する技術に関して投稿しています. This blog is written in Japanese."
                  linkURL="https://qiita.com/shotastage"
                />
              </Col>
            </Row>
            <Row>
              <Col lg="4">
                <WritingCard hatena
                  title="SHOTAのDev.log();"
                  description="開発日記です。"
                  linkURL="https://shdev.hatenablog.com/"
                />
              </Col>
              <Col lg="4">
                <WritingCard fc1b54
                  title="TIPSTOCK!"
                  description="ITのTIPSをお届け"
                  linkURL="https://tipstock.net/"
                />
              </Col>
            </Row>
        </div>
    );
  }
}
