import { useState } from "react";
import Toggle from "./toggle";

export default function Display({taskList, setTaskList}) {

    function toggleTask(taskId, finished) {
        setTaskList(taskList.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    finished: finished,  
                };
            }
            return task;
        }));
    }

    function deleteTask(taskId) {
        setTaskList(taskList.filter((task) => {
            return (task.id !== taskId);
        }));
    }

    function editTask(taskId, title, description) {
        setTaskList(taskList.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    title,
                    description,  
                };
            }
            return task;
        }));
    }

    const [editingTaskId, setEditingTaskId] = useState(null);

    return (
        <div>
            <h2>Current Task List</h2>
            <ul className="list-none pl-0 w-64">
                {taskList.map((task) => (
                    <li key={task.id} className="mb-4 flex justify-between align-middle">
                        <div className="flex">
                            <div className="mr-2">
                                <Toggle onToggle={(curFinished)=>{
                                    toggleTask(task.id, curFinished);
                                }} />
                            </div>
                            <div className={task.finished ? 'text-gray-600 line-through' : ''}>
                                <span className="">
                                    {task.title}
                                </span>
                                <br />
                                <span className={""}>
                                    {task.description}
                                    {task.id}
                                </span>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-1">
                            <button>
                                edit
                            </button>
                            <button onClick={() => deleteTask(task.id)}>
                                delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
    </div>
    );
}