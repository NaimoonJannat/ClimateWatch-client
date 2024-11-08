import { Link } from "react-router-dom";
import PageBanner from "../Shared/PageBanner/PageBanner";

const VolunteerCard = ({ volunteer }) => {
  const { _id, name, profession, photo_url } = volunteer || {};
  console.log(volunteer);

  return (
    <div>
      <Link to={`/volunteers/${_id}`}>
        <div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {/* <div className="flex w-full"> */}
              <img
                className="rounded-t-lg w-full object-contain"
                src={photo_url}
                alt=""
              />
            {/* </div> */}
            <div className="p-5 text-center">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {profession}
              </p>
              <Link
                to={`/volunteers/${_id}`}
                className="flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Visit me
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VolunteerCard;
