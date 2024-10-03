// src/PointsSystem.js
import { useState } from 'react';
import {TaskList} from './TaskList'

function PointsSystem() {
  const [points, setPoints] = useState(0);

  const handleTaskComplete = (taskPoints) => {
    setPoints(points + taskPoints);
  };

  return (
    <div>
      <p>Points: {points}</p>
      <TaskList onTaskComplete={handleTaskComplete} />
    </div>
  );
}

export default PointsSystem;