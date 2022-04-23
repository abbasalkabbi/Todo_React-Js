import axios from "axios";
function Todolist(props){
   
  const url_delete='http://localhost/Todo_React-js-Main/api/Delete.php'
  function handleFormdelete( event ) {
    
  event.preventDefault();
  let deleteItam={
   id:props.id
  }
  axios({
      method: 'post',
      url: `${url_delete}`,
      headers: { 'content-type': 'application/json' },
      data: deleteItam
    })
      .then(result => console.log(result))
    }
    return(
        <tr>
        <th scope="row">{props.id}</th>
        <td>{props.body}</td>
        <td>{props.Status === '0'?'In progress':'Finished'}</td>
     
        <td>
          <button type="submit" class="btn btn-danger"  onClick={e => handleFormdelete(e)}>Delete</button>
          <button type="submit" class="btn btn-success ms-1" >Finished</button>
        </td>
        
      
      </tr>
     
    )
}
export default Todolist;