import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import FacebookIcon from "../assets/images/social/facebook.png";
import InstagramIcon from "../assets/images/social/instagram.png";
import TwitterIcon from "../assets/images/social/twitter.png";
import FooterImage from "../assets/images/footer-logo.jpg";
import Style from "../sass/Footer.module.scss";
import Title from "./Title";

function Footer() {
  return (
    <footer className={` pb-3 ${Style.footer}`}>
      <Container>
        <Row lg={4} xs={1}>
          <Col>
            <div className={Style.footer__image}>
              <img
                src={FooterImage}
                className="img-fluid shadow-sm mb-2"
                alt="blog bazar"
                title="Blog Bazar"
              />
            </div>
            <p className={Style.footer__description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              alias vitae ratione quidem rerum soluta.
            </p>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Your Email"
                className={`me-2 ${Style.subscribe}`}
              />
              <Button className={Style.subscribe}>Subscribe</Button>
            </Form>
          </Col>
          <Col>
            <Title name="Tag Cloud" />
            <div className={Style.tags}>
              <Link to={"/blogs?hashlink=lifestyle"}>
                <span>Lifestyle</span>
              </Link>
              <Link to={"/blogs?hashlink=lifestyle"}>
                <span>Music</span>
              </Link>
              <Link to={"/blogs?hashlink=lifestyle"}>
                <span>Travel</span>
              </Link>
              <Link to={"/blogs?hashlink=lifestyle"}>
                <span>Technology</span>
              </Link>
              <Link to={"/blogs?hashlink=lifestyle"}>
                <span>Health</span>
              </Link>
            </div>
          </Col>
          <Col>
            <Title name="Links" />
            <ul className={Style.links}>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/blogs">
                <li>Blogs</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/privacy-policy">
                <li>Privacy Policy</li>
              </Link>
            </ul>
          </Col>
          <Col>
            <Title name="Follow Us" />
            <div className={Style.social}>
              <a
                href="https://www.facebook.com/mdtalhajobair.fb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={FacebookIcon} alt="Fb Icon" />
              </a>
              <a
                href="https://www.facebook.com/mdtalhajobair.fb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={TwitterIcon} alt="Fb Icon" />
              </a>
              <a
                href="https://www.facebook.com/mdtalhajobair.fb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={InstagramIcon} alt="Fb Icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
