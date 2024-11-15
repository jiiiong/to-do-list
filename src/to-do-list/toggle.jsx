import { useState } from "react";

export default function Toggle({onToggle}) {
    const [finished, setFinished] = useState(false);

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