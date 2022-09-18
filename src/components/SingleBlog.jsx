import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getBlogById } from "../api/api";
import Sidebar from "./Sidebar";
import SingleBlogCard from "./SingleBlogCard";

function SingleBlog() {
  const { blogId } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // const { data, isLoading } = useQuery("singleData", () => getBlogById(blogId));

  useEffect(() => {
    const getBlogById = async () => {
      await axios
        .get(`${process.env.REACT_APP_PROXY}/api/v1/blogs/${blogId}`)
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
        });
    };
    getBlogById();
  }, [blogId]);

  return (
    <section className="pt-5">
      <Container>
        <Row>
          <Col lg={8}>
            <div>
              {isLoading ? (
                <h3>Loading ...</h3>
              ) : (
                <SingleBlogCard blog={data} />
              )}
            </div>
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

export default SingleBlog;
