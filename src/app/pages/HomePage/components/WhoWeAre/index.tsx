/**
 *
 * WhoWeAre
 *
 */
import * as React from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row, Button } from "reactstrap";
import Slider from 'react-slick';
import { messages } from "./messages";
import intro1 from 'assets/intro1.png';
import intro2 from 'assets/intro2.png';
import intro3 from 'assets/intro3.png';

interface Props { }

export function WhoWeAre(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const ItemsList = [
    {
      img: intro1,
      title: 'What is Binance Plus',
      desc: ' They are automatic and decentralized systems that generate profits in your Binance accounts.',
      btn: 'READ MORE',
    },
    {
      img: intro2,
      title: '100% in your control',
      desc: ' Only you have access to your Binance wallet. Everything 100% in your control control.',
      btn: 'READ MORE',
    },
    {
      img: intro3,
      title: 'Multiply your balance',
      desc: 'You register your Binance API in the BinancePlus system and start multiplying your balance.',
      btn: 'READ MORE',
    },
    {
      img: intro1,
      title: 'What is Binance Plus',
      desc: ' They are automatic and decentralized systems that generate profits in your Binance accounts.',
      btn: 'READ MORE',
    },
    {
      img: intro2,
      title: '100% in your control',
      desc: ' Only you have access to your Binance wallet. Everything 100% in your control control.',
      btn: 'READ MORE',
    },
    {
      img: intro3,
      title: 'Multiply your balance',
      desc: 'You register your Binance API in the BinancePlus system and start multiplying your balance.',
      btn: 'READ MORE',
    },
  ]

  var settings = {
    dots: false,
    autoplay: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          swipeToSlide: true,
          arrows: false,
          dots: true,
        }
      },
    ]
  };

  return (
    <section id="who-we-are">
      {/*  {t(...messages.someThing())}  */}
      <Container>
        <Row>
          <Col xl={12}>
            <div className="title-bar">
              <h2>Who We Are</h2>
              <p>Binance is a global cryptocurrency exchange that provides a platform for trading over 100 cryptocurrencies.{/*  */}</p>
            </div>
            <Slider {...settings}>
              {ItemsList.map((e, i) => {
                return (
                  <div className="slide-item" key={i}>
                    <img src={e.img} alt="IntroImage" width="100%" />
                    <div className="content">
                      <h5>{e.title}</h5>
                      <p>
                        {e.desc}
                      </p>
                      <div className="slide-foooter">
                        <Button className="generic-btn">{e.btn}</Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
