import React from "react";
import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import TimeAgo from "./TimeAgo";
import Title from "./Title";

function SingleBlogCard({ blog }) {
  const { image, title, description, createdAt, likes, comments, tags } = blog;
  const [item, setItem] = useState(5);

  const increaseItem = () => setItem((prevState) => prevState + 5);
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
              <AiOutlineLike />
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
                <Comments key={index} comment={comment} />
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
      <CommentForm />
    </>
  );
}

export default SingleBlogCard;
