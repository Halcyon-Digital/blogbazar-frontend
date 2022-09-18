import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { allBlogs } from "../api/api";
import Sidebar from "../components/Sidebar";
import BlogCard from "./BlogCard";

function BlogMain() {
  const { data, isLoading } = useQuery("blogs", () => allBlogs());
  return (
    <section className="pt-5">
      <Container>
        <Row>
          <Col lg={8}>
            {isLoading ? (
              <h4>Loading..</h4>
            ) : (
              <Row lg={2} xs={1}>
                {data &&
                  data.map((blog) => <BlogCard blog={blog} key={blog._id} />)}
              </Row>
            )}
          </Col>
          <Col lg={4}>
            <div style={{ position: "sticky", top: "0" }}>
              <Sidebar />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BlogMain;
