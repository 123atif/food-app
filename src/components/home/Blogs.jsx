import React from "react";
import Heading from "../common/Heading";
import { blogData } from "../../data";
import BlogCard from "./cards/BlogCard";

const Blogs = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mx-5" id="Blogs">
        <Heading Heading={"OUR  BLOGS"} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {blogData.map((item) => (
            <BlogCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
