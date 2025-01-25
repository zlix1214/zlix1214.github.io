import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/BrandLogo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/%E7%A5%A5%E4%BD%91-%E9%84%AD-430778225/" target="_blank">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/zlix1214" target="_blank">
                <img src={navIcon4} alt="Icon" />
              </a>
            </div>
            <p>© 2025 Felix's Portfolio. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
