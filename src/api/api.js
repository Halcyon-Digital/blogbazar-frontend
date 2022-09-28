import axios from "axios";

export const allBlogs = async () => {
  const res = await axios.get(`${process.env.REACT_APP_PROXY}/api/v1/blogs`);
  const data = res.data.blogs;
  return data;
};

export const getBlogById = async (blogId) => {
  const res = await axios.get(
    `${process.env.REACT_APP_PROXY}/api/v1/blogs/${blogId}`
  );
  const data = res.data;
  return data;
};

export const getMe = async (token) => {
  const res = await axios.get(
    `${process.env.REACT_APP_PROXY}/api/v1/users/me`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = res.data;
  return data;
};
