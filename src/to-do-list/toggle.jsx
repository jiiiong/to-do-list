import { useState } from "react";

export default function Toggle(onToggle) {
    const [finished, setFinished] = useState(false);

    return (
        <span onClick={() => {
            setFinished();
            onToggle();
        }}>
        {finished ? 1 : 0}
        </span>
    );
}