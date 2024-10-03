// src/TaskList.js

function TaskList() {
  const tasks = [
    { id: 1, name: 'Complete a survey', points: 10 },
    { id: 2, name: 'Watch a video', points: 20 },
    { id: 3, name: 'Share a post', points: 30 },
  ];

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span>{task.name}</span>
          <span>{task.points} points</span>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;