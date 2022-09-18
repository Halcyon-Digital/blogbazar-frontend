import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import Style from "../sass/HomeCard.module.scss";
import TimeAgo from "./TimeAgo";

function HomeCard({ blog }) {
  const {
    _id,
    title,
    image,
    description,
    likes,
    tags,
    comments,
    user,
    createdAt,
  } = blog;

  return (
    <div className={`d-flex ${Style.contents} shadow bg-white`}>
      <img
        src={`${process.env.REACT_APP_PROXY}/files/${image}`}
        alt="blog title"
      />
      <div className={Style.content}>
        <Link to={`/blogs/${_id}`}>
          <h3>{title}</h3>
        </Link>
        <p>{`${description.slice(0, 300)}...`}</p>
        <div className="d-flex align-items-center">
          <div className="me-3">
            <span className="p-1">
              <AiOutlineLike />
            </span>
            {likes.length}
          </div>
          <div className="me-3">
            <span className="p-1">
              <BiComment />
            </span>
            {comments.length}
          </div>
          <p className="mb-0 me-3">
            Post by <strong>{user?.userName}</strong>
          </p>
          <p className="mb-0">
            <TimeAgo timeStamp={createdAt} />
          </p>
        </div>

        {tags && tags.map((tag) => <Link>{tag}</Link>)}
      </div>
    </div>
  );
}

export default HomeCard;
