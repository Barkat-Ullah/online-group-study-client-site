
// import SingleAssignment from "./SingleAssignment";



// const Assignment = ({assignment}) => {
//     console.log(assignment);

    
//   return (
//     <div className="">
//         <h2 className="mt-28 text-center font-semibold text-primary text-4xl">
//         Quiz test Assignment
//       </h2>
//       <p className="mt-2 mb-2 text-center font-medium text-tertiary">
//         A quiz test assignment is a short assessment designed to test a
//         students knowledge or understanding of a specific topic or subject
//         matter.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
//          {
//             assignment?.map(assign => <SingleAssignment key={assign._id} assign={assign}></SingleAssignment>)
//          }
//       </div> 

//     </div>
//   );
// };

// export default Assignment;



import SingleAssignment from './SingleAssignment';

const Assignment = ({ assignment }) => {
  console.log(assignment);

  return (
    <div className="">
      <h2 className="mt-28 text-center font-semibold text-primary text-4xl">
        Quiz test Assignment
      </h2>
      <p className="mt-2 mb-2 text-center font-medium text-tertiary">
        A "quiz test assignment" is a short assessment designed to test a
        student's knowledge or understanding of a specific topic or subject
        matter.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
         {
            assignment.map(assign => <SingleAssignment key={assign._id} assign={assign}></SingleAssignment>)
         }
      </div>
    </div>
  );
};

export default Assignment;
