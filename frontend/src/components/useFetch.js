import { useState, useEffect } from "react";

const useFetch = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/blogs");
      const data = await response.json();
      setBlogs(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  });
  return { blogs };
};

export default useFetch;
