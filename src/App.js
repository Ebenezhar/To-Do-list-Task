import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [list,setList] = useState([]);
  const [currentTask,setCurrentTask] = useState("");
  let addTask = () => {
    setList([...list,{id:list.length + 1, name: currentTask,isDone : false }]);  
  }

  let markDone = (id) => {
    console.log(id);
    let itemIndex = list.findIndex(obj => obj.id === id);
    list[itemIndex].isDone = true;
    // list[id-1].isDone = true;
    setList([...list]); 
  }
  let deleteContent = (id) => {
    let itemIndex = list.findIndex(obj => obj.id === id);
    console.log(list[itemIndex]);
    list[itemIndex] = "";
    setList([...list]); 
  }
    return (
    <div id='contain'>
      <input id='inp' type="text" onChange={(e) => setCurrentTask(e.target.value)}/>
      <button onClick={addTask}>Add Task</button>
      <ul>
      {
        list.map((item)=>{
          return <li className={item.isDone ? "mark-done" : ""}>{item.name} - <button onClick={() => markDone(item.id)}>Done</button><button onClick={() => deleteContent(item.id)}>Delete</button></li>
        })
      }
      </ul>
    </div>
  );
}

export default App;
