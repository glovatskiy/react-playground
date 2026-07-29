import { useReducer } from "react";

function reducer(state, action) {
    if (action.type === "add") {
        return state + 100;
    }
    if (action.type === "decrease") {
        return state - 100;
    }
    return state;
}

export const Counter = () => {
    const [count, dispatch] = useReducer(reducer, 0);
    
    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={()=>dispatch({type: "add"})}>+100</button>
            <button onClick={()=>dispatch({type: "decrease"})}>-100</button>
        </>
    )
}