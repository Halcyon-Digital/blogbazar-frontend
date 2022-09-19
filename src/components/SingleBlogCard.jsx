import axios from "axios";
import React from "react";
import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import TimeAgo from "./TimeAgo";
import Title from "./Title";
import { toast } from "react-toastify";

function SingleBlogCard({ blog }) {
  const { token } = useSelector((state) => state.auth.user);
  const { image, title, description, createdAt, likes, comments, tags, _id } =
    blog;

  const [item, setItem] = useState(5);

  const increaseItem = () => setItem((prevState) => prevState + 5);

  const handleLike = () => {
    axios
      .patch(
        `${process.env.REACT_APP_PROXY}/api/v1/blogs/like/6326b3c26bd9e9c5f255fcca`,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => console.log(res));
  };

  return (
    <>
      <div className="bg-white shadow">
        <img
          className="w-100"
          src={`${process.env.REACT_APP_PROXY}/files/${image}`}
          alt="blog"
        />
        <div className="p-3">
          <h4 className="text-center mt-4">{title}</h4>
          <p className="text-center">
            <TimeAgo timeStamp={createdAt} />
            <span className="mx-2">-</span>

            <span>
              {new Date(createdAt).getDate()}/{new Date(createdAt).getMonth()}/
              {new Date(createdAt).getFullYear()}
            </span>
            <span className="mx-2">-</span>
            <span className="me-1">
              <AiOutlineLike onClick={handleLike} />
            </span>
            <span>{likes.length}</span>
            <span className="mx-2">-</span>
            <span className="me-1">
              <BiComment />
            </span>
            {comments && <span>{comments.length}</span>}
          </p>
          <p className="mt-4">{description}</p>
          <div className="text-center">
            {!tags.length > 0 && (
              <>
                <h6>Categorized in:</h6>
                <ul>
                  {tags.map((tag) => (
                    <li>
                      <Link to={`/blogs?hashlink=lifestyle`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="p-3 mt-4 shadow bg-white">
        <Title name="Comments" />
        <div>
          {comments && comments.length > 0 ? (
            comments
              .slice(0, item)
              .map((comment, index) => (
                <Comments key={index} comment={comment} blogId={blog._id} />
              ))
          ) : (
            <p>No Search Comments</p>
          )}
          {comments.length > item && (
            <div className="text-center">
              <div
                style={{ cursor: "pointer" }}
                className="d-inline"
                onClick={increaseItem}
              >
                see more
              </div>
            </div>
          )}
        </div>
      </div>
      <CommentForm blogId={blog._id} />
    </>
  );
}

export default SingleBlogCard;
