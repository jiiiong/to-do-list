import { useRef, useState } from "react";
import DisplayItem from "./dispalyItem";
import Toggle from "./toggle";

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
  const [showAll, setShowAll] = useState(true);

  return (
    <div className="w-80 border-solid border-gray-400 border-1 py-2 px-4">
      <h2>Current Task List</h2>
      <span className="mr-2">
        <Toggle initState={!showAll} onToggle={() => setShowAll(!showAll)}/>
      </span>
      {showAll ? "Show only uncompleted tasks" : "Show all tasks"}
      <ul className="list-none pl-0 ">
        {taskList
          .filter((task)=>(showAll || !task.finished))
          .map((task) => (
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

