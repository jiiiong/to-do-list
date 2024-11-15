import { useRef, useState } from "react";
import Display from "./display";

export default function ToDoList() {
    const testTaskList = [{title:'title', description:'description'}];

    const [taskList, setTaskList] = useState(testTaskList);
    const titleRef = useRef(null);
    const descRef = useRef(null);

    function addNewTask(submitEvent) {
        submitEvent.preventDefault();

        // add New Task
        if (titleRef.current && descRef.current) {
            setTaskList([
                ...taskList,
                {
                    key: Symbol(),
                    title: titleRef.current.value,
                    description: descRef.current.value,
                    finished: false,
                },
            ]);
            titleRef.current.value = '';
            descRef.current.value = '';
        }

    }

    return (
        <div>
            <h1>
                To Do List
            </h1>

            <form onSubmit={addNewTask}
                className="
                w-64
                border-solid border-gray-300 border-1
                py-2 px-4
                [&_p]:flex
                [&_p]:justify-between
                "
            >
  
                <p>
                    <label htmlFor="title">title: </label>
                    <input type='text' id='title' required ref={titleRef}></input>
                </p>
                <p>
                    <label htmlFor="description">description: </label>
                    <input type="text" id='description' required ref={descRef}></input>
                </p>
                <button className="align-ri">Add New Task</button>

            </form>
            
            <Display taskList={taskList} setTaskList={setTaskList} />
        </div>
    );
}