import React from 'react';
import Heading from './common/Heading';
import { blogData } from '../data';
import BlogCard from './home/BlogCard';

const Blogs = () => {
  return (
    <div className='mx-5' id='blogs'>
      <Heading Heading={"OUR  BLOG"} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {blogData.map((item) => (
          <BlogCard key={item.id} item={item}/>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
