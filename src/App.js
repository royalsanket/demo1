import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () =>{

  const [inputList,setinputList] = useState("");
  const [Items,setitems] = useState([]);

  const itemEvent = (event) =>{
    setinputList(event.target.value)
  }

  const listOfItems = () =>{
    setitems( (olditems) => {
      return [...olditems , inputList];
    } )

    setinputList("");
  }

  const deleteItems = (id) =>{
    setitems((olditems) =>{
     return olditems.filter((arrElement,index) =>{
        return index !==id
      } )
    } )
    
}



  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type='text' placeholder="Add a Items" onChange={itemEvent} value={inputList} />
          <button onClick={listOfItems}> + </button>

          <ol>

            {Items.map ( (itemval , index) =>{
              return(
                <ToDoList  text = {itemval} 
                  key = {index}
                  id = {index}
                  onSelect = {deleteItems}
                />
              );
            }  )   }

           
          </ol>
        </div>
      </div>
    </>
  );

 }
          

export default App;