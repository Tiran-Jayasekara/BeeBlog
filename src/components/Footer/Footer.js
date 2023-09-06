import React from "react";
import { Col, Row } from "antd";
import logo from "../../assests/images/Dogs/bee.gif";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Row>
        <Col xs={{ span: 0 }} sm={{ span: 0 }} lg={{ span: 2 }}></Col>
        <Col
          xs={{ span: 10 }}
          sm={{ span: 10 }}
          lg={{ span: 5 }}
          className="main-ssk"
        >
          <h5>Terms of Service</h5>

          <Link to="/term" className="privacyLink">
            <h6> Terms of Service</h6>
          </Link>
          <Link to="/policy" className="privacyLink">
            <h6>Privacy Policy</h6>
          </Link>
          <Link to="/dmca" className="privacyLink">
            <h6>DMCA </h6>
          </Link>
        </Col>

        <Col
          xs={{ span: 10 }}
          sm={{ span: 10 }}
          lg={{ span: 5 }}
          className="main-ssk-img"
        >
          <img src={logo} alt="" />
        </Col>

        <Col
          xs={{ span: 10 }}
          sm={{ span: 10 }}
          lg={{ span: 5 }}
          className="main-ssk"
        >
          <h5>Categories</h5>
          <Link to="/breed" className="privacyLink">
            <h6>Breeds</h6>
          </Link>
          <Link to="/training" className="privacyLink">
            <h6>Training</h6>
          </Link>
          <Link to="/health" className="privacyLink">
            <h6>Health</h6>
          </Link>
          <Link to="/funny" className="privacyLink">
            <h6>Funny</h6>
          </Link>
        </Col>

        <Col
          xs={{ span: 10 }}
          sm={{ span: 10 }}
          lg={{ span: 5 }}
          className="main-ssk"
        >
          <div className="follows">
            <h5>About</h5>
            <Link to="/about" className="privacyLink">
              <h6>About Us</h6>
            </Link>
            <Link to="/contact" className="privacyLink">
              <h6>Contact Us</h6>
            </Link>
            <span>
              <a
                href="https://web.facebook.com/profile.php?id=100092485520069"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </span>
            <span>
              <a
                href="https://web.facebook.com/profile.php?id=100092485520069"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </span>
            <span>
              <a
                href="https://www.tiktok.com/@sskwaterfiltertec?_t=8cN2W8W6PFi&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok"></i>
              </a>
            </span>
            <span>
              <a
                href="https://www.youtube.com/channel/UCIYdZcGWvOtlYNLZJYm9eVA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </span>
          </div>
        </Col>
        <Col xs={{ span: 0 }} sm={{ span: 0 }} lg={{ span: 2 }}></Col>
      </Row>
    </footer>
  );
};

export default Footer;
