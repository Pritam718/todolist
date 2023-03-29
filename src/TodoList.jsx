import React from 'react'

const TodoList = (props) => {
  return (
    <>
        <div className='todo_style'>
            <button className="ex2" onClick={()=>{
                props.onselect(props.id)
            }} >-</button>
            <li  >{props.text}</li>
            <br/>
        </div>
      
    </>
  )
}

export default TodoList
