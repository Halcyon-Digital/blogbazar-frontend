import React from "react";
import { Card, Col } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

function BlogCard({ blog }) {
  const { image, title, description, _id } = blog;
  return (
    <Col>
      <Card className="mb-3 border-0 shadow">
        <HashLink to={`/blogs/${_id}`}>
          <Card.Img
            variant="top"
            src={`${process.env.REACT_APP_PROXY}/files/${image}`}
          />
        </HashLink>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description.slice(0, 200)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default BlogCard;
