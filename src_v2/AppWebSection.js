import React from "react";
import { Row, Col } from "react-bootstrap";
import { WebServiceCard } from "./Components/Cards/WebServiceCard";
import { SectionHeading } from "./Components/SectionHeading";
import pinnaWritingImage from "./images/pinna_writing.png";

export class AppWebSection extends React.Component {
  render() {
    const pinnaDescription = `
    Bhaa is musical & geolocational web application. You can share your listening or watching on the Map.
    Bhaa will be redeveloped as an native App more interactive and creative.
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
              title="Bhaa"
              description={pinnaDescription}
              imageURL={pinnaWritingImage}
              linkURL="https://lin9.me/QwNUG"
            />
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <WebServiceCard
              green
              title="2oo.pw"
              description="2oo.pwはURL短縮サービスです. QRコードも同時に作れます. もともと開発中のリンク管理機能でしたが, 便利なので切り出して使えるようにしました."
              linkURL="https://woo.pw/"
            />
          </Col>

          <Col lg="4">
            <WebServiceCard
              black
              title="Github"
              description={githubDescription}
              linkURL="https://github.com/shotastage/"
            />
          </Col>

          <Col lg="4">
            <WebServiceCard
              resume
              title="My Resume"
              description="作った作品や勉強したSkillなどはResumeで発信しています."
              linkURL="https://www.resume.id/shotastage"
            />
          </Col>
        </Row>
      </div>
    );
  }
}
