import React from "react";
import { Col, Row } from "react-bootstrap";
import Style from "../sass/Comments.module.scss";

function Comments({ comment }) {
  return (
    <div className="my-3 py-2 shadow-sm">
      <Row>
        <Col lg={2}>
          <div className={`mx-auto ${Style.comment__user}`}>
            <img
              src={`${process.env.REACT_APP_PROXY}/files/${comment.avatar}`}
              alt="user"
            />
          </div>
        </Col>
        <Col lg={10}>
          <p className={Style.comment}>{comment.comment}</p>
        </Col>
      </Row>
    </div>
  );
}

export default Comments;
