import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import Style from "../sass/Tags.module.scss";

function Tags() {
  return (
    <div className={Style.tags}>
      <Title name="Tag Cloud" />
      <div>
        <Link to={"/blogs?hashlink=lifestyle"}>
          <span>Lifestyle</span>
        </Link>
        <Link to={"/blogs?hashlink=lifestyle"}>
          <span>Music</span>
        </Link>
        <Link to={"/blogs?hashlink=lifestyle"}>
          <span>Travel</span>
        </Link>
        <Link to={"/blogs?hashlink=lifestyle"}>
          <span>Technology</span>
        </Link>
        <Link to={"/blogs?hashlink=lifestyle"}>
          <span>Health</span>
        </Link>
      </div>
    </div>
  );
}

export default Tags;
