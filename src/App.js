import React from "react";

//import Addtodo from "./components/AddTodo";
import Navbar from "./components/NavBar";
import Todo from "./components/Todo";

function App(){
    return(
        <div>
               <Navbar/>
              <div className="container">
                  <Todo/>
            </div>
        </div>
        
    )
}
export default App;