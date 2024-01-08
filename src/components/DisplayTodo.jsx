import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import './DisplayTodo.css'
import { MyContext } from '../MyContext'

const DisplayTodo = () => {
  // let todoArr = ["Go To Market", "Study React", "Use Mobile Phone","Plan For Vaccation","REpair Laptop"];
  const {todoArr,setTodoArr}= useContext(MyContext);

  return (
    <div className='displaytodo-container'>
    <h1>My Todos</h1>
    <div className='todo-items'>
      {
        (todoArr.length === 0)?"No todos to display":""
      }

     { todoArr.map(item =>
        <TodoItem todo ={item}/>
      )}


      {/* <TodoItem desc= "Go To Market"/>
      <TodoItem desc= "Study React"/>
      <TodoItem desc= "Use Mobile Phone"/> */}
    </div>
    </div>
  )
}

export default DisplayTodo
