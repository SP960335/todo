import './App.css';
import React, { useState,useEffect } from 'react';


function Todo() {
    let [var1, function1] = useState(localStorage.getItem("count")|| 0);

    const increment=()=>{
        // va
        function1(var1+1)

        localStorage.setItem("count",var1)
    }
    return (
        <center>
            <div>

                <h1>Increment via function</h1>
                <div className="card">
                    <h3>{var1}</h3>
                    <div>
                        <button onClick={increment}>increment</button>
                    </div>
                </div>
            </div>
        </center>
    );

}
export default Todo;