
import  { useState } from 'react';

const AssignmentFilter = ({ filterAssignments }) => {
  const [selectedLevel, setSelectedLevel] = useState('');

  const handleFilter = () => {

    filterAssignments(selectedLevel);
  };

  return (
    <div>
      <label>Filter by Difficulty Level:</label>
      <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>
        <option value="">All</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
};

export default AssignmentFilter;

