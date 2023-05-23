import React, { useState } from "react";

function ExState(){
    const [count,setCount] = useState(0);
    const [fruit,setFruit] = useState('banana');
    const [works,setWorks] = useState([{work:'study'}]);
    console.log(works);
    const addWork = ()=>{
        setWorks([...works,{work:'feeding'}]);
    }
    return(
        <div>
            <p>click count: {count} clicks!!</p>
            <button onClick={()=>setCount(count+1)}>Click</button>
            <p>Fruit : {fruit}</p>
            <button onClick={()=>setFruit('orange')}>Orange</button>
            <br />
            {JSON.stringify(works)}<br/>
            <button onClick={addWork}>추가</button>
        </div>
    )
}
export default ExState;