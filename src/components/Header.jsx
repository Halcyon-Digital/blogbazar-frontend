import React from "react";
import { Container } from "react-bootstrap";
import { ImFacebook, ImCross } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

function Header({ changeVisibility }) {
  return (
    <div className="bg-dark">
      <Container>
        <div className="d-flex justify-content-center align-items-center text-white">
          <div className="col-9">
            <marquee direction="left" className="marquee-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              eveniet, cumque consectetur laborum magnam et minus minima
              possimus velit quos, magni, molestias corporis rerum ab modi
              architecto eos? Molestias, sit.
            </marquee>
          </div>
          <div className="social-icon col-2 ms-4 text-end">
            <span className="px-2">
              <ImFacebook className="header-icon" />
            </span>
            <span className="px-2">
              <FaInstagram className="header-icon" />
            </span>
            <span className="px-2">
              <AiOutlineTwitter className="header-icon" />
            </span>
          </div>
          <div className="col text-end">
            <span onClick={() => changeVisibility()}>
              <ImCross className="cross" />
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
