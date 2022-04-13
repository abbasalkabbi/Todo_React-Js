import { Component } from 'react';
import Addtodo from'./todo_item/AddTodo'
import Todolist from './todo_item/TodoList';

class Todo extends Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(){
    super()
    this.state={
      userinput:'',
    
      tododata:[
        { id:0,
          body:'Buy groceries for next week',
          status:'In progress'
        }
      ],
      count:0
    }
    this.mapping=this.mapping.bind(this)
    this.updatainput=this.updatainput.bind(this)
    this.addtodolist=this.addtodolist.bind(this)
    
  }
  updatainput(e){
    console.log(e)
    this.setState(prevstate=>{return {userinput:e}})
  }
  addtodolist(){
   this.state.tododata.push({id:1,body:this.state.userinput.slice(), status:'In progress'})
   this.setState(prevstate=>{return {userinput:''}})
  }
  mapping(){
    const todo=this.state.tododata.map(data=><Todolist key={data.id} id={data.id} body={data.body} Status={data.status} /> )
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

            <h4 class="text-center my-3 pb-3">To Do App</h4>

            <div class="card-body">
              <div class="d-flex flex-row align-items-center">
                    <input type="text" class="form-control form-control-lg" id="exampleFormControlInput1" value={this.state.userinput} onChange={e=>this.updatainput(e.target.value)} placeholder="Add new..."/>
                    
                  
                    
                    <div>
                      <button type="button" class="btn btn-primary" onClick={this.addtodolist}>Add</button>
                    </div>
              </div>
        </div>
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
              {this.state.userinput}
              {this.state.setUserInput}
                  
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