/**
 *
 * ZeroLoss
 *
 */
import * as React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { Row, Col, Container, Button } from "reactstrap";
import { messages } from "./messages";
import zeroloss from 'assets/zeroloss.png';
import chips from 'assets/chips.png';

interface Props { }

export function ZeroLoss(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  let history = useHistory();

  const goToRegister = () => {
    history.push('/register')
  }
  return (
    <section id="zero-loss">
      {/*  {t(...messages.someThing())}  */}
      <div className='circle'></div>
      <div className='rectangle'></div>
      <div className='circle1'></div>
      <div className='circle2'></div>
      <Container>
        <div className="zero">
          <Row>
            <Col xl={6} lg={6} md={5} sm={12}>
              <div className="content">
                <div className="content-in">
                  <h4>No Risk Strategy. <br />Your only risk is to earn Bitcoin. </h4>
                  <p>
                    Our technology is different, our stop loss is in the largest crypto currency in the world, in Bitcoin! In the worst case our system will accumulate Bitcoin for you.
                  </p>
                </div>
              </div>
            </Col>
            <Col xl={6} lg={6} md={7} sm={12}>
              <div className="zero-img">
                <img src={zeroloss} height="100%" width="100%" alt="zero loss" />
              </div>
            </Col>
          </Row>
        </div>
        <div className="best-all">
          <Row>
            <Col xl={6} lg={6} md={7} sm={12}>
              <div className="zero-img">
                <img src={chips} height="100%" width="100%" alt="chips" />
              </div>
            </Col>
            <Col xl={6} lg={6} md={5} sm={12}>
              <div className="content">
                <div className="content-in">
                  <h4>Best of all?<br /> It's in the cloud!</h4>
                  <p>
                    You don't need to install anything on your computer or buy or rent VPS. The system works on our cloud servers, you only need to register on the BinancePlus website and enter your BINANCE API's.
                  </p>
                  <Button className="generic-btn" onClick={goToRegister}>Register Now</Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
