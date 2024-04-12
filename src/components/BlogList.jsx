import React from "react";
import { Link } from "react-router-dom";
 
const BlogList
 = () => {
  const data = [
  {
    id: 1,
    category: "GENERAL",
    title: "5 High-Paying Tech Careers: A Guide to Lucrative Opportunities in the Tech Industry",
    author: "By Joan Waweru",
    description: "Explore high-paying tech careers like software engineering, data science, cybersecurity, and more. Discover salary insights, factors affecting earnings, and tips for finding the right tech career for you."
  }, 
  {
    id: 2,
    category: "GENERAL · PROGRAMMING",
    title: "Unlock Your Learning Journey: 9 Key Differences between Bootcamps vs University vs Self-Learning—Discover Your Path to Success",
    author: "By Joan Waweru",
    description: "Dive into the differences between bootcamps, university education, and self-learning to make an informed decision about your educational journey. Explore each option’s advantages and considerations. Which path suits your learning style and goals?"
  }, 
  {
    id: 3,
    category: "DATA SCIENCE · PROGRAMMING",
    title: "Data Science vs Data Analysis: 3 Dynamic Differences for Beginners",
    author: "By Joan Waweru",
    description: "New to the world of data? Learn the difference between data science and data analysis in this beginner-friendly blog post. Explore data analysis basics and uncover the interdisciplinary nature of data science. Ready to dive deeper?"
  },
  {
    id: 4,
    category: "NEWS & UPDATES · DATA SCIENCE · SOFTWARE DEV",
    title: "Are Coding Bootcamps Still Worth It?",
    author: "By Victoria Njuguna",
    description: "Introduction In the ever-evolving landscape of technology, the demand for skilled coders continues to soar. As we step into 2024,…"
  },
  {
    id: 5,
    category: "GENERAL",
    title: "Top 11 Resources For Preparing For Coding Interviews",
    author: "By Bonaventure Ogeto",
    description: "Coding interviews can be intense and being prepared is the only way to reduce tension, stay confident, and increase your…"
  },
  {
    id: 6,
    category: "GENERAL",
    title: "10 Best Certification Courses for University Graduates",
    author: "By Bonaventure Ogeto",
    description: "Congratulations, university graduate! As you step into the next chapter of your life, your choices can significantly impact your career…"
  },
  ];
  
  return (
  <>
 
  <div className="grid grid-cols-3 gap-4">
    {data.map((item) => {
    return (
    <div key={item.id} className="container mt-5 mb-5 grid border border-gray-300 rounded-lg">
    <div className="text-sm text-sky-400">{item.category}</div>
    <div className="text-red-600 text-lg font-mono font-bond">{item.title}</div>
    <div className="text-zinc-400">{item.author}</div>
    <div className="font-serif">{item.description}</div><br /><br />
    <Link to={`/blog/${item.id}`} state={item}>
      <button>Read more</button>
    </Link>
    </div>
    )})}
  </div>
  </>
  );
  };
  
  export default BlogList;