import { useState } from "react";

export default function Toggle({onToggle}) {
    const [finished, setFinished] = useState(false);

    return (
        <button 
            onClick={() => {
                setFinished(!finished);
                onToggle(!finished);
            }} 
            className="select-none"
        >
        {finished ? '✅' : '⬜'}
        </button>
    );
}