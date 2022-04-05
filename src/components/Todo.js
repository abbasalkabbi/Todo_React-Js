import Addtodo from'./todo_item/AddTodo'
import Todolist from './todo_item/TodoList';

function Todo(){
    return(
<section class="vh-100" >
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-9 col-xl-7">
        <div class="card rounded-3">
          <div class="card-body p-4">

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
                <Todolist body='Buy groceries for next week' Status="In progress"/>
                  
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
export default Todo;