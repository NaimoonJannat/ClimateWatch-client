import { useEffect, useState } from "react";

const useVolunteers = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/volunteers`)
      .then(res => res.json())
      .then((data) => setVolunteers(data));

    console.log(volunteers);
  }, []);
  return [volunteers]
};

export default useVolunteers;

