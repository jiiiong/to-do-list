import { useRef } from "react";
import Toggle from "./toggle";

export default function DisplayItem({task, editing, onToggle, onDelete, onEdit, onSave}) {
    const titleRef = useRef(null);
    const descRef = useRef(null);
    return (
      <div className="mb-4 flex justify-between align-middle">
        <div className="flex">
          <div className="mr-2">
            <Toggle
              onToggle={(curFinished) => {
                onToggle(task.id, curFinished);
              }}
            />
          </div>
          <div className={task.finished ? "text-gray-600 line-through" : ""}>
            <span className={editing ? "outline" : ''} contentEditable={editing} ref={titleRef}>{task.title}</span>
            <p className={editing ? "outline " : ''} contentEditable={editing} ref={descRef}>{task.description}</p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <button onClick={editing ? ()=>{onSave(titleRef.current?.innerText, descRef.current?.innerText)}: onEdit}>
            {editing ? 'save' : 'edit'}
          </button>
          <button onClick={() => onDelete(task.id)}>delete</button>
        </div>
      </div>
    );
}