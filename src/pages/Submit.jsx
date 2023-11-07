import { useLoaderData } from "react-router-dom";
import Quiz from "./Quiz";
import { useState } from "react";

const Submit = () => {
  const quizes = useLoaderData();
 const [quize, setQuize] = useState(quizes)



  return (
    <div className="my-24">
      <h2 className="text-center mt-5 text-4xl font-bold text-primary">
        Submitted Assignment
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Quiz Title</th>
              <th>Submitted link</th>
              <th>Marks</th>
              <th>Status</th>
              <button className="btn bg-gradient-to-r from-sky-400 to-blue-500 hover:from-blue-500 hover:to-sky-500 transition delay-150, duration-700, ease-in-out text-white">
                Give Marks
              </button>
            </tr>
          </thead>
          <tbody>
            {quize.map((quiz) => (
              <Quiz key={quiz._id} quiz={quiz}></Quiz>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Submit;
