// import logo from './logo.svg';
import React from "react";
import { useState } from "react";
import './App.css';
import {useDispatch,useSelector} from "react-redux";
import {addTodo, decrement,increment} from "./redux/actions";

function App() {
  // const [value,setValue] = useState(0);
  const [value,setValue] = useState("");
  const {count,todos}=useSelector((state)=> state);  //store or state both is ok
 const dispatch= useDispatch();

  return (
    <div className="App">
    <div>
     <h1>{count}</h1>
     <button onClick={() => dispatch(decrement())}>DEC</button>
     <button onClick={()=> dispatch(increment())}>INC</button>
     </div>
     {/* YOU can uncomment below things by commenting all the todos things */}
      {/* <div>
      <input type="number"
       onChange={({target}) =>setValue(Number(target.value || 0))}
      />
      <button onClick={()=>
        {
          dispatch(decrement(value));
          setValue(0);
        }}>DEC by value</button>
      <button onClick={()=> {

        dispatch(increment(value));
        setValue(0);
      }}>INC by value</button>
     </div>  */}
     <div>
      {todos.map((todo,index)=>(
        <div key={index}>{todo}</div>
      ))}
     </div>
     <div>
     <input onChange={({target}) =>setValue(target.value)}
      />
      <button onClick={()=>  dispatch(addTodo(value))}>Add</button>
    
     </div>
    </div>
  );
}

export default App;
