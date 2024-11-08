import { useEffect, useState } from "react";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/blogs`)
      .then(res => res.json())
      .then((data) => setBlogs(data));

    console.log(blogs);
  }, []);
  return [blogs]
};

export default useBlogs;

