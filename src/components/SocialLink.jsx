import React from "react";
import Title from "./Title";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import Style from "../sass/SocialLink.module.scss";

function SocialLink() {
  return (
    <div>
      <Title name="Follow Us" />
      <div className={Style.social_link}>
        <a
          className={`shadow ${Style.link} ${Style.facebook}`}
          href="https://www.facebook.com/"
        >
          <div className="d-inline">
            <span>
              <FaFacebookF />
            </span>
          </div>
        </a>
        <a
          className={`shadow ${Style.link} ${Style.twitter}`}
          href="https://www.facebook.com/"
        >
          <div className="d-inline">
            <span>
              <AiOutlineTwitter />
            </span>
          </div>
        </a>
        <a
          className={`shadow ${Style.link} ${Style.instagram}`}
          href="https://www.facebook.com/"
        >
          <div className="d-inline">
            <span>
              <BsInstagram />
            </span>
          </div>
        </a>
        <a
          className={`shadow ${Style.link} ${Style.linkedin}`}
          href="https://www.facebook.com/"
        >
          <div className="d-inline">
            <span>
              <GrLinkedinOption />
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default SocialLink;
