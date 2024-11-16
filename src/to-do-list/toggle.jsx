import { useState } from "react";

export default function Toggle({initState, onToggle}) {
    const [finished, setFinished] = useState(initState);

    return (
        <span 
            onClick={() => {
                setFinished(!finished);
                onToggle(!finished);
            }} 
            className="select-none"
        >
        {finished ? '✅' : '⬜'}
        </span>
    );
}