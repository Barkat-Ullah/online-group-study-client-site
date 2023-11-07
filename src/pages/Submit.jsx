

import  { useState, useEffect } from "react";
import axios from "axios";
import Quiz from "./Quiz";

const Submit = () => {
  const [quizes, setQuizes] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:5000/quiz")
      .then((response) => {
        setQuizes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching quiz data: ", error);
      });
  }, []); 

  const handleQuiz = (e, id) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newMarks = formData.get("marks"); 
  
    const quizData = {
      marks: newMarks, 
    };
  
    axios
      .patch(`http://localhost:5000/quiz/${id}`, quizData)
      .then((res) => {
        console.log(res.data);
        
        const updatedQuizes = quizes.map((quiz) =>
          quiz._id === id ? { ...quiz, marks: newMarks } : quiz
        );
        setQuizes(updatedQuizes);
      })
      .catch((error) => {
        console.error("Error updating quiz: ", error);
      });
  };
  

  return (
    <div className="my-24">
      <h2 className="text-center my-8 text-4xl font-bold text-primary">
        Submitted Assignment
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Quiz Title</th>
              <th>Submitted link</th>
              <th>Status</th>
              <th>Marks</th>
              <th>Give Marks</th>
            </tr>
          </thead>
          <tbody>
            {quizes.map((quiz) => (
              <Quiz
                key={quiz._id}
                handleQuiz={handleQuiz}
                quiz={quiz}
              ></Quiz>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Submit;

