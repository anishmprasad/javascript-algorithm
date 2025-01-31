import { useState } from "react";
import BalloonPop from "./BalloonPop";

export default function Baloon(){
    const [count, setCount] = useState(0)
    return (
        <>
            <h4>Balloon POP</h4>
            <p>Use <code>Enter or Space</code> for fire arrow</p>
            <p>Balloons popped : {count}</p>
            <BalloonPop count={() => setCount((count) => count + 1)}/>
        </>
    )
}