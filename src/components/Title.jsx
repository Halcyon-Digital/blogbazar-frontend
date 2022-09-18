import React from "react";
import Style from "../sass/Title.module.scss";

function Title({ name }) {
  return (
    <div className={Style.title__container}>
      <h2 className={Style.title}>{name}</h2>
    </div>
  );
}

export default Title;
