import React, { useState } from 'react'

export default function Input({addTodo}) {
  const [title, setTitle] = useState('')
  //console.log(title);

  const handleAddTodo = (e) => {
    if (e.key.toLowerCase() === 'enter') {
        addTodo(title);
        setTitle('');
    }
}
const btnAddTodo=(e)=>{
 const input = document.getElementById('tareainput')
 if(input.value!==""){
  addTodo(title);
  setTitle('');
 }
}

  return (
    <div>
    <div className="mt-4 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className='border border-gray-500 border-solid p-3 rounded-full'></span>
        </div>
        <input type="text" 
        id='tareainput'
        className='focus:shadow-lg focus:shadow-blue-600 pl-12 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out '
        placeholder='Ingrese Una Tarea'
        //onChange={e=> console.log(e.target.value)}->veo que le estoy pasando
        value={title}
        onChange={e=>setTitle(e.target.value)}
        //al hacer enter
        onKeyDown={e=>handleAddTodo(e)}

        />
        
    </div>
    <div className='container text-center mt-3'>
      <button onClick={e=>btnAddTodo(e)} className=' bg-teal-500 rounded w-full h-12 transition-all duration-200 hover:bg-teal-700 '>Agregar Tarea</button>
    </div>
    </div>
  )
}
