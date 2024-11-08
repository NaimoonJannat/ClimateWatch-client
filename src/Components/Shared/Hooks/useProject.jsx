import { useEffect, useState } from "react";

const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/projects`)
      .then(res => res.json())
      .then(data => setProjects(data));

    console.log(projects);
  }, []);
  return [projects]
};

export default useProjects;
