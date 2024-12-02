import { useState } from 'react';
import './App.css';
import Calculator from './pages/Calculator';
import Virdom from './pages/Virtualdom';

function App() {
  let [todolist, updateTodos] = useState([
    {id:1 , task:"Angular"},
    {id:2 , task:"React"},
  ]);

  let [todoInput , updateInput] = useState('');

  let nextid =3;
  function addTodos(){
    if(todoInput === 0){
      alert("Add some task");
    }else{
     let newtodos = [
        ...todolist,
        {
          id: nextid++,
          task : todoInput
        }
      ]
      updateTodos(newtodos);
      updateInput("");
    }
  }

  function deleteTodo(id){
    let updatedtods = todolist.filter(
      (todo) => {
        return todo.id !== id;
      }
    )
    updateTodos(updatedtods);
  }
  return (
    <>
 <div className='container mt-5 w-50'>
      <h1 className='text-center'>Todo app using in react</h1>
      <div className='input-group'>
        <input type='text'className='form-control' onChange={(e) => {
          let task = e.target.value;
          updateInput(task);
        }} value={todoInput}/>
        <button className='btn btn-primary' onClick={addTodos}>Add</button>
      </div>
      <ul className='list-group mt-4'>
        {
          todolist.map((todo) =>{
            return (
              <li className='list-group-item'> 
                 <p>{ todo.task }</p>
                 <button className='btn' onClick={() => {
                  deleteTodo(todo.id)
                 }}>❌</button>
              </li>
            )
          })
        }
      </ul>
    </div>

    <Calculator></Calculator>

    <Virdom></Virdom>
    </>
  
  );
}

export default App;
