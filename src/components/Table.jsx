import TableRow from "./TableRow";

let Table = (props)=> {
    return(
        <>
         <div className='projects'>
          <div className="responsive-table">
                <table className="fs-15 w-full">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Password</th>
                            <th>Notes</th>
                            <th>Details</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {props.myList.map((element)=>(
                            <TableRow key = {element.id} mylist = {element} onDelete = {props.onDelete}/>
                            ))}
                    </tbody>
                </table>
            </div>
          </div>
        </>
    )
}

export default Table;

