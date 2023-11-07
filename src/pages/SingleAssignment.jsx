import { Link } from "react-router-dom";

const SingleAssignment = ({ assign }) => {
  const { _id, title, level, marks, image, date, description } = assign || "";
  console.log(assign);

  return (
    <div>
      <div>
        <div className="overflow-hidden h-[450px] bg-white rounded shadow-md text-slate-500 shadow-slate-200">
          <figure>
            <img src={image} alt="card image" className="aspect-video w-full" />
          </figure>

          <div className="p-2">
            <header className="flex flex-grow gap-4 mb-4">
              <a
                href="#"
                className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full"
              >
                <img
                  src="https://i.pravatar.cc/48?img=25"
                  alt="user name"
                  title="user name"
                  width="48"
                  height="48"
                  className="max-w-full rounded-full"
                />
              </a>
              <div>
                <h3 className="text-xl font-medium text-primary">{title}</h3>
                <p className="text-sm text-slate-400"> Submit Date : {date}</p>
                <h2 className="text-xl">Method: {level}</h2>
              </div>
            </header>

            <span className="">Gain Mark : {marks}</span>
            <p>{description}</p>
          </div>

          <div className="flex justify-center p-2 pt-0">
            <Link to={`/details/${_id}`}>
              <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded justify-self-center whitespace-nowrap text-sky-500 hover:bg-sky-100 hover:text-sky-600 focus:bg-sky-200 focus:text-sky-700  focus-visible:outline-none disabled:cursor-not-allowed disabled:text-sky-300 disabled:shadow-none disabled:hover:bg-transparent">
                <span>View Assignment</span>

                <div>
                  {" "}
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </button>
            </Link>
            <Link to={`/update/${_id}`}> 
              <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded justify-self-center whitespace-nowrap text-sky-500 hover:bg-sky-100 hover:text-sky-600 focus:bg-sky-200 focus:text-sky-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-sky-300 disabled:shadow-none disabled:hover:bg-transparent">
                <span>Update Assignment</span>

                <div>
                  {" "}
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAssignment;
