import React, { useEffect } from "react";

import { Col, Row } from "antd";
import ScrollReveal from "scrollreveal";

import "./About.css";

import logo from "../../assests/images/Dogs/bee.gif";

import Footer from "../../components/Footer/Footer";

const Breed = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(".revealElement", {
      duration: 2000,
      distance: "50px",
      easing: "ease",
      origin: "bottom",
    });
  }, []);

  return (
    <>
      <Row className="about_Top_background">
        <Col
          className="about_Top"
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          lg={{ span: 24 }}
        >
          <h2>
            <span className="black-text-about">Doggo </span> Tales
          </h2>
          <p>
            Doggo Tales is a captivating and informative blog dedicated to
            celebrating the wonderful world of dogs.
          </p>
        </Col>

        <Row>
          <div >
            <Row>
              <Col
                className="about_header"
                xs={{ span: 22 }}
                sm={{ span: 8 }}
                lg={{ span: 8 }}
              >
                <img src={logo} alt="" />
              </Col>
              <Col
                className="about_header"
                xs={{ span: 22 }}
                sm={{ span: 12 }}
                lg={{ span: 14 }}
              >
                <p>
                  Doggo Tales is a captivating and informative blog dedicated to
                  celebrating the wonderful world of dogs. From heartwarming
                  stories to practical tips and expert advice, Doggo Tales is a
                  go-to destination for all dog lovers. Discover engaging
                  articles that cover various topics, including breed profiles,
                  training tips, health and nutrition advice, heartwarming
                  rescue stories, and much more. Whether you're a seasoned dog
                  owner or simply adore our furry companions, Doggo Tales is
                  here to entertain, educate, and inspire you on your dog-loving
                  journey. Join us as we embark on exciting adventures and share
                  the joy and unconditional love that dogs bring into our lives.
                </p>
                <div className="button_container"></div>
              </Col>
            </Row>
          </div>
        </Row>
      </Row>
      <Footer />
    </>
  );
};

export default Breed;
