import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Style from "../sass/Login.module.scss";
import { login, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userData;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isLoading, isError, isSuccess, message, navigate, dispatch]);

  const handleChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  return (
    <section>
      <Container>
        <div className="py-5 text-center">
          <div className={`${Style.login} shadow-lg rounded`}>
            <h5>Please Login</h5>
            <Form onSubmit={handleSubmit} className="mt-4">
              <input
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Your Email"
              />
              <input
                id="password"
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Your Password"
              />
              <div className="my-1 d-flex justify-content-between">
                <Link to="/register">Register</Link>
                <Link to="/forget">Forget Password</Link>
              </div>
              <button className={Style.submit} type="submit">
                Login
              </button>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Login;
