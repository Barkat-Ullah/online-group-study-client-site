import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import SingleAssignment from "./SingleAssignment";
// import { useLoaderData } from "react-router-dom";

const Assignment = () => {
    const [assignmentData, setAssignmentData] = useState([])

    useEffect(() => {
      AOS.init();
    }, []);

    useEffect(() => {
        fetch('https://online-study-server.vercel.app/assignments')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAssignmentData(data)
        })
    } ,[])
    
  

    console.log(assignmentData);

  const [selectedLevel, setSelectedLevel] = useState("");
  // const assignmentData = useLoaderData();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAssignments = assignmentData
    .filter((assign) => !selectedLevel || assign.level === selectedLevel)
    .slice(indexOfFirstItem, indexOfLastItem);

  const totalItems = assignmentData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="">
      <h2 className="mt-24 text-center font-semibold text-primary text-xl md:text-4xl">
        Quiz test Assignment
      </h2>
      <p className="mt-2 mb-2 text-center font-medium text-tertiary">
        A "quiz test assignment" is a short assessment designed to test a
        student's knowledge or understanding of a specific topic or subject
        matter.
      </p>

      <div className="flex items-center my-4 justify-end">
         <select
          className="select select-info max-w-xs"
          onChange={(e) => setSelectedLevel(e.target.value)}
          value={selectedLevel}
        >
          <option disabled value="">
            Level
          </option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select> 
      </div>

      <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
        {currentAssignments?.map((assign) => (
          <SingleAssignment key={assign._id} assign={assign}></SingleAssignment>
        ))}
      </div> 
       <div className="flex justify-end items-center gap-2 my-8">
        <button className=" btn btn-outline btn-info" onClick={handlePreviousPage}>
          Prev
        </button>
        <button className=" btn btn-outline btn-info" onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Assignment;

