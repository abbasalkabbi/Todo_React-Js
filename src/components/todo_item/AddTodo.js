import { Component } from 'react';
import axios from 'axios';
const API_PATH = 'http://localhost/Todo_React-js-Main/api/AddTodo.php';

class Addtodo extends Component{
  constructor(){
    super()
    this.state={
      userinput:'',
    }
    this.updatainput=this.updatainput.bind(this)
  }
  updatainput(e){
   
    this.setState(prevstate=>{return {userinput:e}})
  }
//send data form
handleFormSubmit( event ) {
        
  event.preventDefault();
  let addtodolist={
   context:this.state.userinput
  }
  axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: addtodolist
    })
      .then(result => console.log(result))
   
     
}
  render(){
    return(
      <div class="card-body">
      <div class="d-flex flex-row align-items-center">
            <input type="text" class="form-control form-control-lg" id="exampleFormControlInput1" value={this.state.userinput} onChange={e=>this.updatainput(e.target.value)} placeholder="Add new..."/>
            
          
            
            <div>
              <button type="submit" class="btn btn-primary"  onClick={e => this.handleFormSubmit(e)}>Add</button>
            </div>
      </div>
</div>
        
    )
  }
    
}
export default Addtodo;