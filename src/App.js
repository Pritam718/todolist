import React, { useState } from 'react'
import TodoList from './TodoList';



const App = () => {

  const [inputList,setInputList]=useState('');
  const [Items,setItems]=useState([]);


  function itemEvent(event){
    //console.log(event.target.value);

    const value=event.target.value;
    //const name=event.target.name;
    setInputList(value);
    }

  const listOfItems=()=>{
      setItems((oldItems)=>{
        return [...oldItems,inputList]
      })
      setInputList('');
  }
  const deletItem=(id)=>{
    console.log('clicked');
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index!== id;
      })
    })
  }
  return (
    <>
      <div className='main_div'>
        <div className='center_div'> 
          <br/>
          <h1>ToDoList</h1>
          <br/>
          <input 
          type='text' 
          placeholder='Add a items'
          name='text'
          onChange={itemEvent}
          value={inputList}
          
          />

          <button className="ex1" onClick={listOfItems}>+</button>

          <ol>
            {Items.map((itemval,index) =>{
              return <TodoList 
              key={index} 
              id={index} 
              text={itemval}
              onselect={deletItem}/>;
            })
          }
          </ol>
        </div>
      </div> 
    </>
  )
}

export default App
