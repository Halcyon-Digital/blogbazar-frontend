import React from "react";
import { Link } from "react-router-dom";
import Style from "../sass/RecentBlogCard.module.scss";

function RecentBlogCard({ blog }) {
  const { image, title, createdAt, _id } = blog;

  return (
    <div className={`${Style.recent} d-flex m-2 p-2`}>
      <img src={`${process.env.REACT_APP_PROXY}/files/${image}`} alt="title" />
      <div className="ms-2">
        <Link to={`/blogs/${_id}`}>
          <h6>{title}</h6>
        </Link>
        <p>
          {new Date(createdAt).getDate()}/{new Date(createdAt).getMonth()}/
          {new Date(createdAt).getFullYear()}
        </p>
      </div>
    </div>
  );
}

export default RecentBlogCard;
