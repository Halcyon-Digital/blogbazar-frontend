import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import ReactQuill from "react-quill";
import Select from "react-select";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

function CreateBlog({ closeBlog }) {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const { token } = useSelector((state) => state.auth.user);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [tags, setTags] = useState([]);

  const formData = new FormData();
  formData.append("title", title);
  formData.append("file", file);
  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    axios
      .post(`${process.env.REACT_APP_PROXY}/api/v1/blogs/create`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Form>
        <input
          type="text"
          className="w-100 mb-3"
          onBlur={(e) => setTitle(e.target.value)}
        />
        <input
          type="file"
          className="w-100 mb-3 bg-white p-2"
          onBlur={(e) => setFile(e.target.files[0])}
        />
        <ReactQuill
          theme="snow"
          value={description}
          onChange={setDescription}
          onBlur={(e) => setTags(e.target)}
        />
        <Select
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
          isMulti
        />
        <div className="d-flex justify-content-between">
          <button onClick={handleSubmit}>Submit</button>
          <button className="btn" onClick={closeBlog}>
            Close
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CreateBlog;
