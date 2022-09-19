import React from "react";
import { ScrollContainer } from "react-nice-scroll";
import { useQuery } from "react-query";
import { allBlogs } from "../api/api";
import RecentBlogCard from "./RecentBlogCard";
import Title from "./Title";

function RecentPost() {
  const { data } = useQuery("blogs", () => allBlogs());

  return (
    <div>
      <Title name="Recent Posts" />
      <ScrollContainer>
        <section style={{ height: "320px" }}>
          {data &&
            data
              .slice(-4)
              .reverse()
              .map((blog) => <RecentBlogCard blog={blog} key={blog._id} />)}
        </section>
      </ScrollContainer>
    </div>
  );
}

export default RecentPost;
