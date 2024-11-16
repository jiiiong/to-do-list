import { useRef } from "react";
import Toggle from "./toggle";

export default function DisplayItem({task, editing, onToggle, onDelete, onEdit, onSave}) {
    const titleRef = useRef(null);
    const descRef = useRef(null);
    return (
    <div>
      <div className="h-[1px] bg-gray-700 mb-2"></div>
      <div className="flex justify-between gap-3 mb-4">
        <div className="flex">
          <div className="mr-2">
            <Toggle
              onToggle={(curFinished) => {
                onToggle(task.id, curFinished);
              }}
            />
          </div>
          <div className={(task.finished ? "text-gray-600 line-through" : "")}>
            <span className={(editing ? "outline outline-1 outline-offset-2" : '') + ' font-semibold inline-block mb-2'} contentEditable={editing} ref={titleRef}>{task.title}</span>
            <div className={editing ? "outline outline-1 outline-offset-2" : ''} contentEditable={editing} ref={descRef}>{task.description}</div>
          </div>
        </div>

        <div className="flex flex-col justify-items-start gap-1">
          <button onClick={editing ? ()=>{onSave(titleRef.current?.innerText, descRef.current?.innerText)}: onEdit}>
            {editing ? 'save' : 'edit'}
          </button>
          <button onClick={() => onDelete(task.id)}>delete</button>
        </div>
      </div>
    </div>
    );
}