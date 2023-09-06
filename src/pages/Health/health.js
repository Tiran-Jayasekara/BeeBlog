import React, { useEffect, useState } from "react";
import "./health.css";
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



const Health = () => {
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
      heading: "Jermon Sheped",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      link: "/breedpost1",
    },
    {
      image: image1,
      heading: "Rottweiler",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      link: "/breedpost1",
    },
    {
      image: image2,
      heading: "Labrador",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      link: "/breedpost1",
    },
    {
      image: image3,
      heading: "Huskey",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      link: "/breedpost1",
    },
    {
      image: image4,
      heading: "Fluppy",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      link: "/breedpost1",
    },
    {
      image: image5,
      heading: "Goldern Retriver",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      link: "/breedpost1",
    },
    {
      image: image,
      heading: "Jermon Sheped",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      link: "/breedpost1",
    },
    {
      image: image1,
      heading: "Rottweiler",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      link: "/breedpost1",
    },
    {
      image: image2,
      heading: "Labrador",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      link: "/breedpost1",
    },
    {
      image: image3,
      heading: "Huskey",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      link: "/breedpost1",
    },
    {
      image: image4,
      heading: "Fluppy",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      link: "/breedpost1",
    },
    {
      image: image5,
      heading: "Goldern Retriver",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
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

{isLoading ? (
        <LoadingScreen/>
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
              <span className="black-text3">Bee Funny </span> Info
            </h1>
          </Col>
        </Row>
        <Col className="space"></Col>

        <Row className="search_bar">
          <Col
            xs={{ span: 20 }}
            sm={{ span: 22 }}
            lg={{ span: 4 }}
            className="search_bar_col"
          >
            <Input.Search
              placeholder="Search..."
              onChange={(e) => handleSearch(e.target.value)}
              allowClear
            />
          </Col>
        </Row>

        <Row className="cards_col_2_blog ">
          {filteredData.map((card, index) => (
            <Col
              key={index}
              className="cards_col_1_blog card-hover"
              xs={{ span: 22 }}
              sm={{ span: 20 }}
              lg={{ span: 8 }}
            >
              <Card>
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
                      {card.description}
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

export default Health;
