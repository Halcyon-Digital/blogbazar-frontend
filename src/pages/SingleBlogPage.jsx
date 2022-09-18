import React, { useEffect } from "react";
import SingleBlog from "../components/SingleBlog";
import Layout from "../shared/Layout";

function SingleBlogPage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Layout>
      <SingleBlog />
    </Layout>
  );
}

export default SingleBlogPage;
