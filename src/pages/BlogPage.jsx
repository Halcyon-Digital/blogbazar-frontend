import React, { useEffect } from "react";
import BlogMain from "../components/BlogMain";
import Layout from "../shared/Layout";

function BlogPage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Layout>
      <BlogMain />
    </Layout>
  );
}

export default BlogPage;
