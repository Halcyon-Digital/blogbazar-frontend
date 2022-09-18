import React from "react";
import { Form } from "react-bootstrap";
import Style from "../sass/CommentForm.module.scss";

function CommentForm() {
  return (
    <div className={`shadow mt-4 bg-white p-4 ${Style.comment__Form}`}>
      <Form action="">
        <Form.Control
          style={{
            border: "1px solid #b6357e",
            resize: "none",
            height: "130px",
          }}
          as="textarea"
          placeholder="Leave a comment here"
        />
        <button
          className={`mt-3 shadow-lg  px-3 py-1 ${Style.comment__button}`}
          type="submit"
        >
          Comment
        </button>
      </Form>
    </div>
  );
}

export default CommentForm;
