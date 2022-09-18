import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Style from "../sass/NotFound.module.scss";

function NotFound() {
  return (
    <section className={`${Style.notfound} py-5`}>
      <Container>
        <h3>404</h3>
        <h4>Page Not Found</h4>
        <h5>Something's wrong here...</h5>
        <p>We Can't find the page you're looking.</p>
        <Link to="/">Go back to home</Link>
      </Container>
    </section>
  );
}

export default NotFound;
