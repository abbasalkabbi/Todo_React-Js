
function Todolist(props){
    return(
        <tr>
        <th scope="row">1</th>
        <td>{props.body}</td>
        <td>{props.Status}</td>
        <td>
          <button type="submit" class="btn btn-danger">Delete</button>
          <button type="submit" class="btn btn-success ms-1">Finished</button>
        </td>
      </tr>
     
    )
}
export default Todolist;