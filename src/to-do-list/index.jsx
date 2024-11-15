import { useRef, useState } from "react";

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
                    title: titleRef.current.value,
                    description: descRef.current.value,
                    finished: false,
                },
            ]);
            titleRef.current.value = '';
            descRef.current.value = '';
        }

    }

    function markTaskAsComplete() {

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
            
            <div >
                <h2>Current Task List</h2>
                <ul>
                    {taskList.map((task, idx) => (
                        <li key={idx}>
                            {task.title} 
                            <br/>
                            {task.description}
                        </li>
                    ))}
                </ul>
                {/* {taskList.length ?
                    <ul>
                    {taskList.map((task, idx) => {
                        return <li key={idx}>{task.title} <br/> {task.description}</li>;
                    })}
                    </ul>
                    : <p>There currently do not have tasks, fill the form above to add one!</p>
                } */}

            </div>
        </div>
    );
}