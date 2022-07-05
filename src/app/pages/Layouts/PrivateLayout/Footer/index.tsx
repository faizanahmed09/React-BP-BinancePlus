/**
*
* Footer
*
*/
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import {Col, Container, Row} from "reactstrap";
import Logo from "../../../../../assets/logo.png";
import youtube from 'assets/youtube.png';
import linkedin from 'assets/linkedin.png';
import facebook from 'assets/facebook.png';
import {Link} from "react-router-dom";

interface Props {}

export function Footer(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
      <footer>
          <Container>
              <Row>
                  <Col xl={4} lg={12} md={12}>
                      <div className="copyright-social">
                          <img src={Logo} alt="Logo" width="100%" height="100%" className="logo" />
                          <p>© 2022 . All rights reserved.</p>
                          <ul>
                              <li>
                                  <a href="#" target="_blank">
                                      <img src={youtube} width="18" height="18" alt="youtube" />
                                  </a>
                              </li>
                              <li>
                                  <a href="#" target="_blank">
                                      <img src={linkedin} width="18" height="18" alt="linkedin" />
                                  </a>
                              </li>
                              <li>
                                  <a href="#" target="_blank">
                                      <img src={facebook} width="18" height="18" alt="facebook" />
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </Col>
                  <Col xl={8} lg={12} md={12}>
                      <ul className="quick-link">
                          <li>
                              <a href="#">Category</a>
                          </li>
                          <li>
                              <a href="#">About Company</a>
                          </li>
                          <li>
                              <a href="#">Terms</a>
                          </li>
                          <li>
                              <a href="#">Privacy Policy</a>
                          </li>
                          <li>
                              <a href="#">Help Center</a>
                          </li>
                          <li>
                              <a href="#">Contact Us</a>
                          </li>
                      </ul>
                  </Col>
              </Row>
          </Container>
      </footer>
  );

};

