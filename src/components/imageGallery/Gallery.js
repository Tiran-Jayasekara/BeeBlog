import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Col, Row } from "antd";
import './Gallery.css'

import sherped from "../../assests/images/Dogs/sherped.jpg";
import rot from "../../assests/images/Dogs/rot.jpg";
import labo from "../../assests/images/Dogs/labo.jpg";

import huskey from "../../assests/images/Dogs/huskey.jpg";
import fluffy from "../../assests/images/Dogs/fluffy.jpg";
import ret from "../../assests/images/Dogs/ret.jpg";


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Gallery() {
  return (
    <Row>
        <Col xs={{ span: 1 }} sm={{ span: 2 }} lg={{ span: 2 }}></Col>
      <Col xs={{ span: 22 }} sm={{ span: 20 }} lg={{ span: 20 }}>
      <div className="image-list-container">
        <h1>Gallery</h1>
      <ImageList
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
      </Col>
      <Col xs={{ span: 1 }} sm={{ span: 2 }} lg={{ span: 2 }}></Col>
    </Row>
  );
}

const itemData = [
  {
    img: sherped,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: rot,
    title: "Burger",
  },
  {
    img: labo,
    title: "Camera",
  },
  {
    img: rot,
    title: "Coffee",
    cols: 2,
  },
  {
    img: labo,
    title: "Hats",
    cols: 2,
  },
  {
    img: huskey,
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: fluffy,
    title: "Basketball",
  },
  {
    img: ret,
    title: "Fern",
  },
  {
    img: huskey,
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: fluffy,
    title: "Tomato basil",
  },
  {
    img: ret,
    title: "Sea star",
  },
  {
    img: fluffy,
    title: "Bike",
    cols: 2,
  },
];
