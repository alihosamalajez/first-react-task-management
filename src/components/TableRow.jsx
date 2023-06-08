let TableRow = (props)=> {
    let onDeleteHandler =()=>{
        props.onDelete(props.mylist.firebase_id)
    }
    return(
        <tr>
            <td>{props.mylist.userName}</td>
            <td>{props.mylist.password}</td>
            <td>{props.mylist.notes}</td>
            <td>{props.mylist.details}</td>
            <td><a href="#" onClick={onDeleteHandler}>Delete</a></td> 
        </tr>

    )
}

export default TableRow;