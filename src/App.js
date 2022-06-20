import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [myList,setList] = useState([])
  let addItem = () => {
    let newList = [...myList,{name:"new value",len:`${myList.length + 1}`}];
    setList(newList);
  }
  return (
    <div id='contain'>
      <button onClick= {addItem}>Add item</button>
      <ul>
        {
          myList.map((item)=>{
           return <li>{item.len}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
