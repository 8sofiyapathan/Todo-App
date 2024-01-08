import { useState } from 'react';
import './App.css';
import { MyContext } from './MyContext';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TodoApp from './components/TodoApp';

function App() {

  let [todoArr, setTodoArr] = useState([]);

  return (
   <div className='app-container'>
   <Navbar/>
   <MyContext.Provider value={{todoArr,setTodoArr}}>

   <TodoApp/>

   </MyContext.Provider>
   <Footer/>
   </div>
  );
}

export default App;
