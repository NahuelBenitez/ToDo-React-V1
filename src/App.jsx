import React, { useState, useEffect } from 'react'
import { Children } from 'react';
import Title from './components/Title'
import Input from './components/Input'
import ToDoList from './components/ToDoList'



export default function App() {




  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Watch the next Marvel Movie',
      completed: false,
    },
    {
      id: 2,
      title: 'Record the next Video',
      completed: false,
    },
    {
      id: 3,
      title: 'Wash the dishes',
      completed: false,
    },
    {
      id: 4,
      title: 'Study 2 hours',
      completed: false,
    }

  ])

  const [activeFilter, setActiveFilter] = useState('Todas');

  const [filteredTodos, setFilteredTodos] = useState(todos);

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      completed: false
    }

    const todoList = [...todos]
    todoList.push(newTodo);

    setTodos(todoList);
  }

  const handleSetComplete = (id) => {

    const updatedList = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo;
    })

    setTodos(updatedList);
  }

//update
const handleUpdate=(id)=>{
  /*
    const updateTodo = todos.map(todo=>{
      if (todo.id === id) {
        return { ...todo, title: !todo.title }
      }
      return todo;
    })
    setTodos(updateTodo)
    */
   console.log("hola");
}


  const handleClearComplete = () => {
    const updatedList = todos.filter(todo => !todo.completed);
    setTodos(updatedList);
  };

  const handleDelete = (id) => {
    const updatedList = todos.filter(todo => todo.id !== id);
    setTodos(updatedList);
  }
  

  const showAllTodos = () => {
    setActiveFilter('Todas')
  }

  const showActiveTodos = () => {
    setActiveFilter('Pendientes')
  }

  const showCompletedTodos = () => {
    setActiveFilter('Completadas')
  }


  useEffect(() => {
    if (activeFilter === 'Todas') {
      setFilteredTodos(todos);
    } else if (activeFilter === 'Pendientes') {
      const activeTodos = todos.filter(todo => todo.completed === false);
      setFilteredTodos(activeTodos);
    } else if (activeFilter === 'Completadas') {
      const completedTodos = todos.filter(todo => todo.completed === true);
      setFilteredTodos(completedTodos);
    }

  }, [activeFilter, todos]);


  return (
    <div>
      <Title />
      <div className='bg-gray-900 h-full text-gray-100 flex items-center justify-center px-4 min-h-screen'>
        <div className="container flex flex-col max-w-xl">

          <Input addTodo={addTodo} />
          <ToDoList
            activeFilter={activeFilter}
            todos={filteredTodos}
            showAllTodos={showAllTodos}
            showActiveTodos={showActiveTodos}
            showCompletedTodos={showCompletedTodos}
            handleSetComplete={handleSetComplete}
            handleDelete={handleDelete}
            handleClearComplete={handleClearComplete}
            handleUpdate={handleUpdate}
          />


        </div>

      </div>
    </div>


  )
}
