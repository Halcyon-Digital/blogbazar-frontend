import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { allBlogs } from "../api/api";
import HomeCard from "./HomeCard";
import Sidebar from "./Sidebar";

function AllBlogs() {
  const { data, isLoading } = useQuery("blogs", () => allBlogs());

  return (
    <section className="pb-4 pt-5">
      <Container>
        <Row>
          <Col lg={8}>
            {isLoading ? (
              <h3>Loading...</h3>
            ) : (
              data.map((blog, index) => <HomeCard blog={blog} key={index} />)
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

export default AllBlogs;
