import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import ScrollReveal from "scrollreveal";
import Footer from "../../components/Footer/Footer";
import { Input } from "antd";
import image from "../../assests/images/Dogs/1.jpg";
import image1 from "../../assests/images/Dogs/2.jpg";
import image2 from "../../assests/images/Dogs/3.jpg";

import image3 from "../../assests/images/Dogs/4.jpg";
import image4 from "../../assests/images/Dogs/5.jpg";
import image5 from "../../assests/images/Dogs/6.jpg";

import LoadingScreen from "../Loading/LoadingScreen";
import "./Blogs.css";

const Blogs = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);

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
    {
      image: image,
      heading: "Let's groom your dog details about bath time to Nail trim.",
     
      link: "/breedpost1",
    },
    {
      image: image1,
      heading: "Mining Bees",
      link: "/breedpost1",
    },
    {
      image: image2,
      heading: "Sweat Bees",
      link: "/breedpost1",
    },
    {
      image: image3,
      heading: "Carpenter Bees",
      link: "/breedpost1",
    },
    {
      image: image4,
      heading: "Sweat Bees",
      link: "/breedpost1",
    },
    {
      image: image5,
      heading: "Africanized Honey Bees",
      link: "/breedpost1",
    },

    // Add more cards here...
  ];

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(".revealElement", {
      duration: 2000,
      distance: "100px",
      easing: "ease",
      origin: "bottom",
    });
  }, []);

  const handleSearch = (value) => {
    setSearchText(value);
    const filtered = cards.filter((card) =>
      card.heading.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  const filteredData = searchText ? filteredCards : cards;

  return (
    <>
      {/* <Row className="table-of-contents">
  <Col xs={{ span: 20 }} sm={{ span: 22 }} lg={{ span: 8 }}>
    <h3>Table of Contents</h3>
    <ul>
      {cards.map((card, index) => (
        <li key={index}>
          <a href={`#${card.link}`}>{card.heading}</a>
        </li>
      ))}
    </ul>
  </Col>
</Row> */}

      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <div className="cards_background">
            <Row>
              <Col
                className="cards_header"
                xs={{ span: 20 }}
                sm={{ span: 22 }}
                lg={{ span: 22 }}
              >
                <h1>
                  <span className="black-text">Bees </span> Info
                </h1>
              </Col>
            </Row>
            <Col className="space"></Col>

            <Row className="search_bar_blog">
              <Col
                xs={{ span: 20}}
                sm={{ span: 8 }}
                lg={{ span: 5 }}
                className="search_bar_col_blog"
              >
                <Input.Search
                  placeholder="Search..."
                  onChange={(e) => handleSearch(e.target.value)}
                  allowClear
                />
              </Col>
            </Row>


            <Row className="cards_blog_2 ">
             
                {filteredData.map((card, index) => (
                  <Col
                    key={index}
                    className="cards_blog_1 card-hover"
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

            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default Blogs;
