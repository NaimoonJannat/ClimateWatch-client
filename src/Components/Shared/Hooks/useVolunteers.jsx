import { useEffect } from "react";

const Volunteers = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/volunteers`)
      .then(res => res.json())
      .then((data) => setVolunteers[data]);

    console.log(data);
  }, []);
  return [volunteers]
};

export default Volunteers;

