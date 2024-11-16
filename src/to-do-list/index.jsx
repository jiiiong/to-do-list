import { useEffect, useRef, useState } from "react";
import Display from "./display";

// init taskList from localStorage
let initTaskList;
const existingTaskList = localStorage.getItem("taskList");
if (existingTaskList) {
  initTaskList = JSON.parse(existingTaskList);
} else {
  initTaskList = [];
}

export default function ToDoList() {
  const [taskList, setTaskList] = useState(initTaskList);

  // for adding new tasks
  const titleRef = useRef(null);
  const descRef = useRef(null);
  function addNewTask() {
    if (titleRef.current && descRef.current) {
      setTaskList([
        ...taskList,
        {
          id: getUniqueTaskId(),
          title: titleRef.current.value,
          description: descRef.current.value,
          finished: false,
        },
      ]);
      titleRef.current.value = "";
      descRef.current.value = "";
    }
  }

  // get the last as well as the max taskId from taskList,
  // because task id are in ascend order
  const lastTaskIdRef = useRef(taskList[taskList.length - 1]?.id ?? 0);
  function getUniqueTaskId() {
    return ++lastTaskIdRef.current;
  }

  // persist taskList with localStorage
  useEffect(() => {
    if (taskList) localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div>
      <h1>To Do List</h1>

      <form
        onSubmit={(submitEvent) => {
          submitEvent.preventDefault();
          addNewTask();
        }}
        className="
                    w-64
                    border-solid border-gray-300 border-1
                    py-2 px-4
                    [&_p]:flex
                    [&_p]:justify-between"
      >
        <p>
          <label htmlFor="title">title: </label>
          <input type="text" id="title" required ref={titleRef}></input>
        </p>
        <p>
          <label htmlFor="description">description: </label>
          <input type="text" id="description" required ref={descRef}></input>
        </p>
        <button className="align-ri">Add New Task</button>
      </form>

      <Display taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}
