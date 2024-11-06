import React from "react";
import Img1 from "../../assets/blogs/blog1.jpeg";
import Img2 from "../../assets/blogs/blog2.jpeg";
import Img3 from "../../assets/blogs/blog3.jpeg";
import BlogCard from "./BlogCard";

const BlogData = [
  {
    img: Img1,
    title:
      "“Sustainable Solutions for Lasting Impact”",
    description:
      "“We do not inherit the earth from our ancestors, we borrow it from our children.” — Native American Proverb",
    date: "April 22, 2024",
    writer: "Dewanshu",
  },
  {
    img: Img2,
    title:
      "“Unity in Action: The Power of Local Partnerships”",
    description:
      "Individually, we are one drop. Together, we are an ocean.",
    date: "Jan 22, 2024",
    writer: "Anonymous",
  },
  {
    img: Img3,
    title:
      "“Empowering Through Education”",
    description:
      "Education is the most powerful weapon which you can use to change the world.”",
    date: "April 22, 2024",
    writer: "Rahul",
  },
];
const Blogs = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className="container py-8">
        <h1 className="mb-8 border-l-8 pl-2 text-center text-3xl font-bold">
          Our Latest Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {BlogData.map((blog) => (
            <BlogCard
              key={blog.title}
              img={blog.img}
              title={blog.title}
              description={blog.description}
              date={blog.date}
              writer={blog.writer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
