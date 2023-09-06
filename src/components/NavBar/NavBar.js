import { Col, Row } from "antd";
import React, { useState } from "react";

import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assests/images/Dogs/bee.gif";

function Navbar() {
  const [click, setClick] = useState(false);
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const isActiveLink = (pathname) => {
    return location.pathname === pathname ? "nav-links active" : "nav-links";
  };

  return (
    <>
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 24 }}>
          <div className="navbar-container">
            <div className="NavBar-header">
              <img src={logo} alt="Logo" className="logo" />
              <h1 className="title">Bee Tales</h1>
            </div>

            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/"
                  className={isActiveLink("/")}
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/breed"
                  className={isActiveLink("/breed")}
                  onClick={closeMobileMenu}
                >
                  Blogs
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link
                  to="/training"
                  className={isActiveLink("/training")}
                  onClick={closeMobileMenu}
                >
                  Training
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/health"
                  className={isActiveLink("/health")}
                  onClick={closeMobileMenu}
                >
                  Health
                </Link>
              </li> */}
              <li className="nav-item">
                <Link
                  to="/health"
                  className={isActiveLink("/funny")}
                  onClick={closeMobileMenu}
                >
                  Funny
                </Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </>
  );
}
export default Navbar;
