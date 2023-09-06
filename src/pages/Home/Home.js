import React, { useEffect, useState } from "react";
import "./Home.css";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import ScrollReveal from "scrollreveal";

import dog from "../../assests/images/Dogs/banner.jpg";
import Footer from "../../components/Footer/Footer";
import Visit from "../../components/Visit/visit";

import image from "../../assests/images/Dogs/1.jpg";
import image1 from "../../assests/images/Dogs/2.jpg";
import image2 from "../../assests/images/Dogs/3.jpg";

import image3 from "../../assests/images/Dogs/4.jpg";
import image4 from "../../assests/images/Dogs/5.jpg";
import image5 from "../../assests/images/Dogs/6.jpg";

import LoadingScreen from "../Loading/LoadingScreen";

function Home() {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(".revealElement", {
      duration: 2000,
      distance: "100px",
      easing: "ease",
      origin: "bottom",
    });
  }, []);

  useEffect(() => {
    // Simulate a 3-second loading process
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(loadingTimer);
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  const cards = [
    {
      image: image,
      heading:
        "Let's investigate dog breed from Play full pug to active retrivers.",
      link: "/breedpost1",
    },
    {
      image: image1,
      heading: "Do you need advice on welcome in a new puppy into your house?",
      link: "/breedpost1",
    },
    {
      image: image2,
      heading: "Do you know about dog intertain statement experience?",
      description: "BY JEANINE TRACEE SEPTEMBER 25, 2022",
      link: "/breedpost1",
    },
    {
      image: image3,
      heading: "Do you know dogs Can Heal our mind and reduce stress?",
      link: "/breedpost1",
    },
    {
      image: image4,
      heading:
        "Why dogs how and back do you need to know cases and interpretation?",
      link: "/breedpost1",
    },
    {
      image: image5,
      heading: "Bee fashion need to know",

      link: "/breedpost1",
    },

    // Add more cards here...
  ];

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <div className="cards_background ">
            <Row>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                lg={{ span: 24 }}
                className="hedderImage "
              >
                <img src={dog} alt="HederImage"></img>
                <h2>Bee Tales</h2>
                <h6>
                  Bee Tales is a captivating and informative blog dedicated to
                  celebrating the wonderful world of dogs.
                </h6>
              </Col>

              <Col
                xs={{ span: 20 }}
                sm={{ span: 22 }}
                lg={{ span: 24 }}
                className="Home_Heder_Text"
              >
                <div className="Home_Heder_h6">
                  <h1>
                    <span className="black-text-Home">Wel come </span> to Bee
                    Tales
                  </h1>
                  <h6>
                    Bee Tales is a captivating and informative blog dedicated
                    to celebrating the wonderful world of dogs. From
                    heartwarming stories to practical tips and expert advice,
                    Doggo Tales is a go-to destination for all dog lovers.
                    Discover engaging articles that cover various topics,
                    including breed profiles, training tips, health and
                    nutrition advice, heartwarming rescue stories, and much
                    more.
                  </h6>
                </div>
              </Col>
            </Row>
            <Col className="space"></Col>

            {/* card set 2 */}

            <Row>
              <Col
                xs={{ span: 20 }}
                sm={{ span: 20 }}
                lg={{ span: 20 }}
                className="Popular_Posts"
              >
                <h2>Popular Posts</h2>
              </Col>
            </Row>

            <Row className="cards_col_Home1 ">
              {cards.map((card, index) => (
                <Col
                  key={index}
                  className="cards_col_Home2 card-hover"
                  xs={{ span: 22 }}
                  sm={{ span: 12 }}
                  lg={{ span: 8 }}
                >
                  <Card className="cardMain">
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={card.image}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          className="card-heading"
                        >
                          <h4>{card.heading}</h4>
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          className="card-paragraph"
                        >
                          <h4>
                            BY
                            <span className="Writer">
                              {" "}
                              PeerWave {" "}
                            </span>{" "}
                            SEPTEMBER 25, 2023
                          </h4>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Link to={card.link}>
                        <Button size="small" color="primary">
                          Read More
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Col>
              ))}
            </Row>

            <Row>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                lg={{ span: 24 }}
                className="SeeMore-Button  "
              >
                <Link to="/breed">
                  <div className="SeeMore-Button-container">
                    <h5>See More Posts</h5>
                  </div>
                </Link>
              </Col>
            </Row>
          </div>
          <Visit />
          {/* <Gallery /> */}
          <Footer />
        </>
      )}
    </>
  );
}
export default Home;
