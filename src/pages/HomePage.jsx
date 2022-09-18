import React, { useEffect } from "react";
import AllBlogs from "../components/AllBlogs";
import Layout from "../shared/Layout";

function HomePage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Layout>
      <AllBlogs />
    </Layout>
  );
}

export default HomePage;
