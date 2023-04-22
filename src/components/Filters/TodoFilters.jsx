import React from 'react'
import { FilterButton, FilterButtonContainer, FiltersContainer, ItemsLeft } from "./TodoFilters.components"

const TodoFilters =({ total, activeFilter, showAllTodos, showActiveTodos, showCompletedTodos, handleClearComplete})=>{
return (
   <FiltersContainer>
    <ItemsLeft  total={total} />
    <FilterButtonContainer>
    <FilterButton action={() => showAllTodos()} active={activeFilter} filter='Todas' />
                <FilterButton action={() => showActiveTodos()} active={activeFilter} filter='Pendientes' />
                <FilterButton action={() => showCompletedTodos()} active={activeFilter} filter='Completadas' />
    </FilterButtonContainer>
    <button onClick={() => handleClearComplete()} className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in-out">
                Borrar Completadas
            </button>

   </FiltersContainer>
)
}

export {TodoFilters}