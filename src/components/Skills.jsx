import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import meter4 from "../assets/img/meter4.png";
import meter5 from "../assets/img/meter5.png";
import meter6 from "../assets/img/meter6.png";
import meter7 from "../assets/img/meter7.png";
import meter8 from "../assets/img/meter8.png";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Here are the tools and technologies I use to bring ideas to
                life, from front-end frameworks like React and Bootstrap to
                back-end solutions like MongoDB and Express.js. Together, they
                help me build seamless and impactful digital experiences.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
                autoPlay={true}
                autoPlaySpeed={1500}
                transitionDuration={1000}
              >
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>
                    HTML CSS
                    <br />
                    JacvSCript
                  </h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="image" />
                  <h5>Node/Express.js</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="image" />
                  <h5>monggoDB</h5>
                </div>
                <div className="item">
                  <img src={meter8} alt="image" />
                  <h5>
                    git
                    <br />
                    version control
                  </h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="image" />
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <img src={meter7} alt="image" />
                  <h5>Procreate</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
