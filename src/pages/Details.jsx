/* eslint-disable react/no-unknown-property */
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";

const Details = () => {
  const details = useLoaderData();
  const { _id, title, level, marks, image, date, description } = details;

  const { user } = useContext(AuthContext);
  const newDetails = {
    user: user?.email,
    _id,
    title,
    level,
    marks,
    image,
    date,
    description,
  };
  console.log(newDetails);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  flex-col lg:flex-row">
          <div className="flex-1">
            <img src={image} className="w-full rounded-lg " />
          </div>
          <div className="flex-1 flex-grow  ml-5">
            <h1 className="text-5xl py-2 text-primary font-bold font-bold">
              {title}
            </h1>
            <p className=" text-tertiary py-2">{description}</p>
            <h2 className="text-xl py-2 text-primary">
              Assignment submit time: {date}
            </h2>
            <h2 className="text-xl py-2 text-primary">
              Gained: <span className="text-sky-400">{marks}</span>
            </h2>
            <h2 className="text-xl pt-2 pb-3 text-primary">
              Assignment Position: {level}
            </h2>

            <Link to={`/takeAssignment/${_id}`}>
              <button className="btn bg-gradient-to-r from-sky-400 to-blue-500 hover:from-blue-500 hover:to-sky-500 transition delay-150, duration-700, ease-in-out text-white">
                Take an Assignment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const Details = () => {
//   const { id } = useParams();
//   const [assignmentDetails, setAssignmentDetails] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Define a separate function to fetch assignment details
//     const fetchAssignmentDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/assignments/${id}`);
//         setAssignmentDetails(response.data);
//       } catch (err) {
//         console.error('Error fetching assignment details:', err);
//         setError('Failed to fetch assignment details');
//       }
//     };

//     // Call the function to fetch details
//     fetchAssignmentDetails();
//   }, [id]);

//   return (
//     <div>
//       <h2 className="mt-24">Details</h2>
//       {error ? (
//         <p>Error: {error}</p>
//       ) : assignmentDetails ? (
//         <div>
//           {/* Render assignment details here */}
//           <h3>Title: {assignmentDetails.title}</h3>
//           <p>Level: {assignmentDetails.level}</p>
//           <p>Marks: {assignmentDetails.marks}</p>
//           <p>Submit Date: {assignmentDetails.date}</p>
//           <p>Description: {assignmentDetails.description}</p>
//         </div>
//       ) : (
//         <p>Loading assignment details...</p>
//       )}
//     </div>
//   );
// };

// export default Details;
