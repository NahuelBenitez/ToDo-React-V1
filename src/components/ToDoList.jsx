
import React from 'react'
import { TodoFilters } from './Filters/ToDoFilters'
import { ToDo } from './ToDo'


export default function ToDoList({ todos,
  activeFilter,
  handleSetComplete,
  handleDelete,
  handleClearComplete,
  showAllTodos,
  showActiveTodos,
  showCompletedTodos }) {
  return (
    <div className='flex flex-col mt-6 rounded-lg overflow-hidden shadow-2xl'>
      {todos.map(todo => {
        return (
          <ToDo 
          key={todo.id} 
          todo={todo} 
          handleSetComplete={handleSetComplete} 
          handleDelete={handleDelete} />
        )
      })}
      <TodoFilters
       activeFilter={activeFilter}
       total={todos.length}
       showAllTodos={showAllTodos}
       showActiveTodos={showActiveTodos}
       showCompletedTodos={showCompletedTodos}
       handleClearComplete={handleClearComplete}
      />
    </div>
  )
}
