import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import UserInput from "./components/userInput/UserInput";
import ToDoList from "./components/todoList/ToDoList";
import "./app.css";

function App() {
  
  let storedToDo = JSON.parse(localStorage.getItem("todo"))
  if(storedToDo === null){
    storedToDo =[];
  }
  const [inputArr, setInputArr] = useState(storedToDo);

  const deleteItem = (id) => {
    setInputArr((prevArr) => prevArr.filter((el, idx) => idx !== id));
  };

  const added = (val) => {
    setInputArr((prevValue) => [...prevValue, {isChecked:false,todo:val}]);
  };

  const checked = (id) => {
     setInputArr(prevArr =>  prevArr.map((arrEl,idx) => {
        if(idx !==id ){
          return arrEl;
        } else{
          return {...prevArr[id],isChecked:!prevArr[id].isChecked}
        }
     } ))
  }

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(inputArr));
  }, [inputArr]);

  return (
    <div className="App">
      <Header />
      <UserInput isClicked={added} />
      <ul className="ul">
        {inputArr.map((item, id) => (
          <ToDoList
               checkedVal={item.isChecked} 
               checked={checked}  
               item={item.todo} 
               key={id} 
               idx={id} 
               onDelete={deleteItem}     
           />
        ))}
      </ul>
    </div>
  );
}

export default App;
