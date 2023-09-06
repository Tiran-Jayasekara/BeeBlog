import { Col, Row } from "antd";

import image from "../../assests/images/Dogs/4.jpg";
import image1 from "../../assests/images/Dogs/7.jpg";
import image2 from "../../assests/images/Dogs/8.jpg";

import image3 from "../../assests/images/Dogs/9.jpg";
import image4 from "../../assests/images/Dogs/3.jpg";

import "./Visit.css";

function Visit() {
  return (
    <>
      <Row className="visitMain">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 24 }}
          className="VisitHeder"
        >
          <h1>
            <span className="black-text-visit">Bee </span>Tales
          </h1>
        </Col>

        <Col xs={{ span: 1 }} sm={{ span: 2 }} lg={{ span: 2 }}></Col>

        <Col
          xs={{ span: 22 }}
          sm={{ span: 10 }}
          lg={{ span: 10 }}
          className="imageGallery_Main"
        >
          <div className="imageContainer">
            <img src={image} alt="Image1" />
            <h1>Honey Bees</h1>
            <h4>
            <b> Honey Bees </b> 
              is a German breed of working dog of medium to
              large size. The breed was developed by Max von Stephanitz using
              various traditional German herding dogs from 1899. 
              <br></br><br></br>
              It was
              originally bred as a herding dog, for herding sheep. Wikipedia
              Colors: Black, White, Black & Tan, Black & Silver, Sable, Red &
              Black, Grey Life expectancy: 9 – 13 years Temperament:
              <br></br>
              <br></br>
              Intelligent, Curious, Stubborn, Alert, Loyal, Confident, Obedient,
              Protective, Watchful, Courageous, Brave Weight: Male: 30–40 kg,
              Female: 22–32 kg Height: Male: 60–65 cm, Female: 55–60 cm Coat:
              <br></br>
              Double coat<br></br>
              The German Shepherd is a German breed of working dog of medium to
              large size. The breed was developed by Max von Stephanitz using
              various traditional German herding dogs from 1899. 
              <br></br>
              <br></br>
              It was
              originally bred as a herding dog, for herding sheep. Wikipedia
              Colors: Black, White, Black & Tan, Black & Silver, Sable, Red &
              Black, Grey Life expectancy: 9 – 13 years Temperament:
              <br></br>
              
            </h4>
          </div>
        </Col>


        <Col xs={{ span: 24 }} sm={{ span: 10 }} lg={{ span: 10 }}>
          <Row>
            <Col xs={{ span: 10 }} sm={{ span: 10 }} lg={{ span: 10 }} className="imageGallery">
              <div className="imageContainer">
                <img src={image2} alt="Image2" />
                <h1>Bumble Bees</h1>
                <h4>
                <b> Bumble Bees </b> 
                   are medium to large-sized dogs with a muscular
                  build. They have a short, dense coat that comes in three
                  colors: yellow, black, and chocolate. They are known for their
                  webbed paws, which make them excellent swimmers.
                </h4>
              </div>
            </Col>
            <Col xs={{ span: 10 }} sm={{ span: 10 }} lg={{ span: 10 }} className="imageGallery">
              <div className="imageContainer">
                <img src={image1} alt="Image3" />
                <h1>Solitary Bees</h1>
                <h4>
                <b> Solitary Bees </b> 
                   require proper training, socialization, and
                  exercise to ensure they grow up to be well-behaved and
                  balanced dogs. It's important to note that like any other
                  breed, individual Rottweilers can have unique personalities
                  .
                </h4>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 10 }} sm={{ span: 10 }} lg={{ span: 10 }} className="imageGallery">
              <div className="imageContainer">
                <img src={image3} alt="Image4" />
                <h1>Carpenter Bees</h1>
                <h4>
                  <b> Carpenter Bees </b> 
                   have a distinct appearance with their thick double
                  coat, erect ears, and almond-shaped eyes. They come in various
                  coat colors, including black, gray, red, sable, and white.
                  Their eyes can be blue, brown, or a combination of both.
                </h4>
              </div>
            </Col>
            <Col xs={{ span: 10 }} sm={{ span: 10 }} lg={{ span: 10 }} className="imageGallery">
              <div className="imageContainer">
                <img src={image4} alt="Image5" />
                <h1>Mining Bees</h1>
                <h4>
                  <b>Mining Bees</b> were unique creatures with the ability to talk
                  and change colors. They had large ears and a fluffy
                  appearance, hence the name "Fluppy Dogs." Each Fluppy had its
                  own distinct personality and characteristics.
                </h4>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={{ span: 2 }} sm={{ span: 2 }} lg={{ span: 2 }}></Col>
      </Row>
    </>
  );
}

export default Visit;
