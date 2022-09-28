import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { getMe } from "../api/api";
import HomeCard from "./HomeCard";
import Profile from "./Profile";

function ProfileMain() {
  const { userName, email, avatar, token } = useSelector(
    (state) => state.auth.user
  );
  const { data, isLoading } = useQuery("me", () => getMe(token));
  console.log(data);
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
            {data && data.blogs.length > 0 ? (
              data.blogs.map((blog) => <HomeCard blog={blog} />)
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
