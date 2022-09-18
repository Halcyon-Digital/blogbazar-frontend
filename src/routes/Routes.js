import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPage from "../pages/BlogPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFound";
import SingleBlogPage from "../pages/SingleBlogPage";

function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:blogId" element={<SingleBlogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;
