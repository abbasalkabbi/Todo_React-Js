import { Component } from 'react';
import Addtodo from'./todo_item/AddTodo'
import Todolist from './todo_item/TodoList';


const url_data = 'http://localhost/Todo_React-js-Main/api/ListTodo.php';

class Todo extends Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(){
    super()
    this.state={
      userinput:'',
    
      tododata:[
       
      ],
      
    }
    this.mapping=this.mapping.bind(this)
   
  }
    
  
 

 // created method fetch data from api
 data(){
  fetch(`${url_data}`)
  .then((res)=>res.json())
  .then((json)=>{

      this.setState({
        tododata :json
      })
  })
 
}


  mapping(){
    const todo=this.state.tododata.map(data=><Todolist key={data.id} id={data.id} body={data.context} Status={data.status} /> )
    return todo
  }
  render(){
    return(
     
<section class="vh-100" >
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-9 col-xl-7">
        <div class="card rounded-3">
          <div class="card-body p-4">
          {this.data()}
            <h4 class="text-center my-3 pb-3">To Do App</h4>

          <Addtodo/>
            <table class="table mb-4">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Todo item</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
               {this.mapping()}
            
                  
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
  }
}
export default Todo;