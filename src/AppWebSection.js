import React from "react";
import { Row, Col } from "react-bootstrap";
import { WebServiceCard } from "./Components/Cards/WebServiceCard";
import { SectionHeading } from "./Components/SectionHeading";

export class AppWebSection extends React.Component {
  render() {
    const githubDescription = `
    Many open-sourced software are available on @shotastage Github.
    `;

    return (
      <React.Fragment>
        <Row>
          <Col>
            <SectionHeading>Apps & Web</SectionHeading>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <WebServiceCard
              green
              title="2oo.pw"
              description="2oo.pwはURL短縮サービスです. QRコードも同時に作れます. もともと開発中のリンク管理機能でしたが, 便利なので切り出して使えるようにしました."
            />
          </Col>
          <Col lg="4">
            <WebServiceCard
              black
              title="Github"
              description={githubDescription}
            />
          </Col>
          <Col lg="4">
            <WebServiceCard
              resume
              title="My Resume"
              description="作った作品や勉強したSkillなどはResumeで発信しています."
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
