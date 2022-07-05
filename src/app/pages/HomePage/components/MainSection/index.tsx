/**
 *
 * MainSection
 *
 */
import * as React from "react";
import { useTranslation } from "react-i18next";

import { Col, Container, Row, Button } from "reactstrap";

import {useEffect, useState} from "react";


interface Props { }

export function MainSection(props: Props) {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();


  return (
    <section id="main-bg" style={{height: '138vh'}}>
      {/* {t(...messages.MainHeading())}  */}
      <Container className="m-0 mx-4">
        <Row>
          <Col xl={4} lg={4} md={6} sm={12}>
            <div className="content d-flex justify-content-start" style={{marginTop:"148px"}}>
              <div>

                <h4>HomePage</h4>

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
