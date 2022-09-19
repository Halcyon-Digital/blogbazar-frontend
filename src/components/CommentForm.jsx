import axios from "axios";
import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Style from "../sass/CommentForm.module.scss";

function CommentForm({ blogId }) {
  const [comment, setComment] = useState("");
  const { token } = useSelector((state) => state.auth.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `${process.env.REACT_APP_PROXY}/api/v1/comments`,
        { comment, blogId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          e.target.reset();
          toast.success(res.data.message);
        }
      });
  };

  return (
    <div className={`shadow mt-4 bg-white p-4 ${Style.comment__Form}`}>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          style={{
            border: "1px solid #b6357e",
            resize: "none",
            height: "130px",
          }}
          onBlur={(e) => setComment(e.target.value)}
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
