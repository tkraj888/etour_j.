import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slideshow.css';

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/International-travel.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>EXPLORE THE WORLD WITH US!</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/kashmir.jpg"
          alt="First slide"

        />
        <Carousel.Caption>
          <h3><b> Beauty of kashmir
          </b>
          </h3>
          <p>Picturesque and enchanting, Kashmir is cradled high in the lofty green Himalayas and hailed all over the world for
            its incredible natural beauty</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/goa.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3> <b> Beaches of Goa </b></h3>
          <p>The beautiful sunset along with the welcoming strangers remind you of how grateful life has been to you and you find 
            yourself melting in its magnificent culture where everyone is cherished.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/kerala.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3> <b>Back to Nature in Kerala </b></h3>
          <p>
            The pride of Kerala are Gorgeous and Exotic Beaches, Breathtaking hill Stations, Enchanting waterfalls,
            Beautiful lagoons, Meandering rivers and Amazing natural scenarios. These colors are made Kerala as a land of beauty
            and paradise on earth.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

