import React from "react";
import RecentPost from "./RecentPost";
import SocialLink from "./SocialLink";
import Tags from "./Tags";

function Sidebar() {
  return (
    <>
      <div className="mb-3">
        <RecentPost />
      </div>
      <div className="mb-3">
        <Tags />
      </div>
      <div className="mb-3">
        <SocialLink />
      </div>
    </>
  );
}

export default Sidebar;
