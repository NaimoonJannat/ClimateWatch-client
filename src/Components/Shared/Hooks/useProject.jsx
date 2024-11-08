import { useEffect } from "react";

const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/projects`)
      .then(res => res.json())
      .then((data) => setProjects[data]);

    console.log(data);
  }, []);
  return [projects]
};

export default useProjects;