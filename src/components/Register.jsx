import React from "react";
import { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import Style from "../sass/Login.module.scss";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../features/auth/authSlice";
import { Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);

  const formData = new FormData();

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("file", file);

    dispatch(register(formData));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isLoading, isError, isSuccess, message, navigate, dispatch]);

  return (
    <section>
      <Container>
        <div className="py-5 text-center">
          <div className={`${Style.login} shadow-lg rounded`}>
            <h5>Please Register</h5>
            <Form className="mt-4" onSubmit={handleSubmit}>
              <div className="d-flex justify-content-between">
                <input
                  id="fname"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="me-2"
                  onBlur={(e) => setFirstName(e.target.value)}
                />
                <input
                  id="lname"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onBlur={(e) => setLastName(e.target.value)}
                />
              </div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                onBlur={(e) => setEmail(e.target.value)}
              />
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Your Password"
                onBlur={(e) => setPassword(e.target.value)}
              />
              <input
                id="file"
                type="file"
                name="file"
                onBlur={(e) => setFile(e.target.files[0])}
              />
              <div className="text-end my-1">
                <Link to="/login">Already have an account.</Link>
              </div>
              <button className={Style.submit} type="submit">
                Register
              </button>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Register;
