import { useEffect } from "react";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/blogss`)
      .then(res => res.json())
      .then((data) => setBlogs[data]);

    console.log(data);
  }, []);
  return [blogs]
};

export default useBlogs;

