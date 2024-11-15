import Toggle from "./toggle";

export default function Display({taskList, setTaskList}) {
    return (
        <div>
            <h2>Current Task List</h2>
            <ul className="list-none pl-0">
                {taskList.map((task, idx) => (
                    <li key={idx}>
                        <Toggle onToggle={(curFinished)=>{
                            setTaskList(taskList.map((curTask, curIdx) => {
                                if (curIdx === idx) {
                                    return {
                                        ...curTask,
                                        finished: curFinished,  
                                    };
                                }
                                return curTask;
                            }));
                        }} />
                        
                        <span className={task.finished ? 'text-gray-600 line-through' : ''}>
                            {task.title}
                        </span>
                        
                        <br />

                        <span className={task.finished ? 'text-gray-600 line-through' : ''}>
                            {task.description}
                        </span>
                        
                    </li>
                ))}
            </ul>
    </div>
    );
}