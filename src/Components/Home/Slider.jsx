import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";

import slide1 from "../../Assets/carousel-slide-1.jpeg";
import slide2 from "../../Assets/carousel-slide-2.jpeg";
import slide3 from "../../Assets/carousel-slide-3.jpeg";
import slideMob1 from "../../Assets/carousel-slide-1-mob.jpeg";
import slideMob2 from "../../Assets/carousel-slide-2-mob.jpeg";
import slideMob3 from "../../Assets/carousel-slide-3-mob.jpeg";

export const Slider = () => {
  return (
    <Container fluid className="px-lg-0">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-none d-md-block w-100"
            src={slide1}
            alt="First slide"
          />
          <img className="d-md-none w-100" src={slideMob1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-none d-md-block w-100"
            src={slide2}
            alt="Second slide"
          />
          <img className="d-md-none w-100" src={slideMob2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-none d-md-block w-100"
            src={slide3}
            alt="Third slide"
          />
          <img className="d-md-none w-100" src={slideMob3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};
