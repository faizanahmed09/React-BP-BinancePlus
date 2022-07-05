/**
 *
 * Benefits
 *
 */
import * as React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "reactstrap";
import { messages } from "./messages";
import globe from 'assets/globe.png';

interface Props { }

export function Benefits(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const BenefitsList = [
    '100% Secure and Decentralized',
    '100% Automatic and Profitable',
    '100% in your control',
    '100% in your Binance account',
    'No monthly fees'
  ]

  return (
    <section id="benefits">
      {/*  {t(...messages.someThing())}  */}
      <Container>
        <div className="title-bar">
          <h2>Advantages of Binance Plus Technology</h2>
          <p>Advantages of Binance Plus Technology</p>
        </div>
        <Row>
          <Col xl={6} lg={6} md={12} sm={12}>
            <img src={globe} height="100%" width="100%" alt="globe" />
          </Col>
          <Col xl={6} lg={6} md={12} sm={12}>
            <div className="benefits">
              <ul>
                {BenefitsList.map((data, i) => {
                  return (
                    <li key={i}>
                      <span>0{i + 1}</span>
                      <p>{data}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
