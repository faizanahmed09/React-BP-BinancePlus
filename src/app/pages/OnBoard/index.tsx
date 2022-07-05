/**
*
* OnBoard
*
*/
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from "reactstrap";
import ReactPlayer from "react-player";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { selectAuth, selectAuthUser } from "../../redux/Auth/slice/selectors";
interface Props { }

export function OnBoard(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const user = useSelector(selectAuthUser);

  return (
    <>
      <Container className="my-xl-5 my-lg-5 my-2 pt-3">
        <div className="mb-xl-5 mb-lg-5 mb-3">
          <article className="text-center">
            <h1 className="welcom-txt">Welcome</h1>
            <span className="px-100px welcom-desc-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu amet, velit et sed.</span>
          </article>
          <div className="mt-xl-5 mt-lg-5 mt-3">
            <Row className="d-flex w-100 justify-content-center m-0">
              <Col xl={4} lg={4} md={6} sm={12} className="mb-3" >
                <article className="boxBackground d-flex flex-column align-items-center h-100">
                  <h1 className="step-txt pt-xl-5 pt-lg-5 pt-4">Step 1</h1>
                  <p className="para-txt py-xl-5 py-lg-5 py-4">{user ? (<>{user?.userName}</>) : 'User'}, first, order one of our plans by clicking on the button below:</p>
                  <button className="btn-order my-lg-3 mt-3 mb-xl-5 mb-lg-5 mb-4" onClick={() => history.push('/orderplan')}>
                    <span className="btn-order-txt">Order Now</span>
                    <span className="ms-4">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="16" fill="white" />
                        <path d="M14.498 21.0002C14.3664 21.0009 14.2359 20.9757 14.1141 20.9259C13.9922 20.8762 13.8814 20.8029 13.788 20.7102C13.6943 20.6172 13.6199 20.5066 13.5691 20.3848C13.5183 20.2629 13.4922 20.1322 13.4922 20.0002C13.4922 19.8682 13.5183 19.7375 13.5691 19.6156C13.6199 19.4937 13.6943 19.3831 13.788 19.2902L17.098 16.0002L13.918 12.6902C13.7317 12.5028 13.6272 12.2494 13.6272 11.9852C13.6272 11.721 13.7317 11.4675 13.918 11.2802C14.0109 11.1864 14.1215 11.1121 14.2434 11.0613C14.3653 11.0105 14.496 10.9844 14.628 10.9844C14.76 10.9844 14.8907 11.0105 15.0126 11.0613C15.1344 11.1121 15.245 11.1864 15.338 11.2802L19.198 15.2802C19.3812 15.4671 19.4838 15.7184 19.4838 15.9802C19.4838 16.2419 19.3812 16.4932 19.198 16.6802L15.198 20.6802C15.1082 20.7771 15.0002 20.8553 14.88 20.9102C14.7599 20.9651 14.63 20.9957 14.498 21.0002Z" fill="#F2B80E" />
                      </svg>
                    </span>
                  </button>
                </article>
              </Col>
              <Col xl={4} lg={4} md={6} sm={12} className="mb-3" >
                <article className="boxBackground d-flex flex-column align-items-center h-100">
                  <h1 className="step-txt pt-xl-5 pt-lg-5 pt-4">Step 2</h1>
                  <p className="para-txt py-xl-5 py-lg-5 py-4">Make the payment regarding the adhesion to the hired plan.</p>
                  <button className="btn-pay my-xl-5 my-lg-5 mt-3 mb-xl-5 mb-lg-5 mb-4 mt-md-5" onClick={() => history.push('/nanopage')}>
                    <span>Pay</span>
                  </button>
                </article>
              </Col>
              <Col xl={4} lg={4} md={6} sm={12} className="mb-3" >
                <article className="boxBackground  d-flex flex-column align-items-center h-100">
                  <h1 className="step-txt pt-xl-5 pt-lg-5 pt-4">Step 3</h1>
                  <p className="para-txt py-xl-5 py-lg-5 py-3">If you need support, talk to me.</p>
                  <div className="text-center my-xl-5 pt-xl-4 my-lg-5 pt-lg-4 my-3 pt-0">
                    <span className="phone-txt">Tariq Zia</span><br />
                    <span className="phone-txt">Phone: (30) 4362-2200</span>
                  </div>
                </article>
              </Col>
            </Row>
          </div>
        </div>

        {/*  Know More*/}
        <div className="">
          <article className="text-center mb-xl-5 mb-lg-5 mb-3">
            <h1 className="welcom-txt">Know More</h1>
            <span className=" welcom-desc-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu amet, velit et sed.</span>
          </article>

          <div className="d-flex w-100 justify-content-center mt-xl-5 mt-lg-5 mt-3">
            <Row>
              <Col xl={6} lg={6} md={12} >
                <div className="bg-light video-rect mb-4 pt-3 px-lg-3 px-xl-3">
                  <span className="video-txt">Binance Plus is for everyone!</span>
                  <div className="d-flex justify-content-center pt-3">
                    <ReactPlayer
                      url="https://www.youtube.com/watch?v=_efbHR5sfbc&t=4s"
                      controls={true}
                      width="100%"
                      height="233px"
                      origin="window.location.origin"
                    />
                  </div>
                </div>
              </Col>
              <Col xl={6} lg={6} md={12}>
                <div className="bg-light video-rect mb-4 pt-3 px-lg-3 px-xl-3">
                  <span className="video-txt">Business Presentation</span>
                  <div className="d-flex justify-content-center pt-3">
                    <ReactPlayer
                      url="https://www.youtube.com/watch?v=PtL1ncFPWns"
                      controls={true}
                      width="100%"
                      height="233px"
                      origin="window.location.origin"
                    />
                  </div>
                </div>
              </Col>
              <Col xl={6} lg={6} md={12}>
                <div className="bg-light video-rect mb-4 pt-3 px-lg-3 px-xl-3">
                  <span className="video-txt">How to activate your Binance Plus account</span>
                  <div className="d-flex justify-content-center pt-3">
                    <ReactPlayer
                      url="https://www.youtube.com/watch?v=PtL1ncFPWns"
                      controls={true}
                      width="570px"
                      height="233px"
                      origin="window.location.origin"
                    />
                  </div>
                </div>
              </Col>
              <Col xl={6} lg={6} md={12}>
                <div className="bg-light video-rect mb-4 pt-3 px-lg-3 px-xl-3">
                  <span className="video-txt">How to activate your plan</span>
                  <div className="d-flex justify-content-center pt-3">
                    <ReactPlayer
                      url="https://www.youtube.com/watch?v=_efbHR5sfbc&t=4s"
                      controls={true}
                      width="570px"
                      height="233px"
                      origin="window.location.origin"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );

};

const Div = styled.div``;
