import PageBanner from "../Shared/PageBanner/PageBanner";
import image from "../../assets/banner/projects_banner.jpg";
import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SingleProject = () => {
  const projects = useLoaderData();
  const { id } = useParams();
  const [project, setProject] = useState(null);
  console.log(projects);
  console.log(project);

  useEffect(() => {
    fetch(`http://localhost:8000/projects/${id}`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, [id]);

  const {
    photo,
    heading,
    description,
    neededFund,
    fundCollected,
    goalAndPlan,
    briefDescriptions,
    projectBrief,
    addtionalImages,
  } = project || {};

  return (
    <div>
      <PageBanner image={image} pageName={"Projects Single"} />
      <div className="max-w-5xl mx-auto mt-10">
        <div >
          <div className="">
            <img
              src={photo}
              alt="project banner"
              className="rounded-2xl h-96 object-cover mt-5 w-full"
            />
          </div>
        </div>

        <h1 className="text-5xl font-bold my-5">{heading}</h1>
        
        
      </div>
    </div>
  );
};

export default SingleProject;
