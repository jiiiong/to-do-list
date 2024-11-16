import { useRef, useState } from "react";
import DisplayItem from "./dispalyItem";

export default function Display({ taskList, setTaskList }) {
  function toggleTask(taskId, finished) {
    setTaskList(
      taskList.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            finished: finished,
          };
        }
        return task;
      })
    );
  }

  function deleteTask(taskId) {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== taskId;
      })
    );
  }

  function editTask(taskId, title, description) {
    setTaskList(
      taskList.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            title,
            description,
          };
        }
        return task;
      })
    );
  }

  const [editingTaskId, setEditingTaskId] = useState(null);
  
  return (
    <div>
      <h2>Current Task List</h2>
      <ul className="list-none pl-0 w-64">
        {taskList.map((task) => (
          <li key={task.id}>
            <DisplayItem 
              task={task} 
              editing={editingTaskId === task.id} 
              onToggle={toggleTask} 
              onDelete={deleteTask}
              onEdit={()=>{setEditingTaskId(task.id);}}
              onSave={(title, desc)=>{
                editTask(editingTaskId, title, desc);
                setEditingTaskId(null);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

