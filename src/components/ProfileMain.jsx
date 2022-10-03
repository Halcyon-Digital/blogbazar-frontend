import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { getMe } from "../api/api";
import CreateBlog from "./CreateBlog";
import HomeCard from "./HomeCard";
import Profile from "./Profile";

function ProfileMain() {
  const [isCreate, setIsCreate] = useState(true);
  const { userName, email, avatar, token } = useSelector(
    (state) => state.auth.user
  );
  const { data } = useQuery("me", () => getMe(token));

  const closeBlog = () => {
    setIsCreate(false);
  };

  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col>
            <div style={{ position: "sticky", top: "0" }}>
              <Profile userName={userName} email={email} avatar={avatar} />
            </div>
          </Col>
          <Col>
            {isCreate && <CreateBlog closeBlog={closeBlog} />}
            <div className="d-flex justify-content-between shadow bg-white p-3 mb-4">
              <h3 className="">My Blogs</h3>
              <button onClick={() => setIsCreate(true)}>New Blog</button>
            </div>
            {data && data.blogs.length > 0 ? (
              data.blogs.map((blog, index) => (
                <HomeCard key={index} blog={blog} />
              ))
            ) : (
              <p>No crate blog.</p>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ProfileMain;
