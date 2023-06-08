import { useRef } from "react"

let HeaderForm = (props)=> {

let onSubmithandlaer = (event)=>{
    event.preventDefault();
    if(chackData()){
        data()
    }
}
let userName = useRef();
let password = useRef();
let notes = useRef();
let details = useRef();

let chackData = ()=>{
    if(userName.current.value != "" &&
    password.current.value != "" &&
    notes.current.value != "" &&
    details.current.value != ""){
        return true
    }
    alert("Enter Data")
    return false
}
    
let data = ()=>{
    let dataList = {
        id:Date.now(),
        userName : userName.current.value,
        password : password.current.value,
        notes : notes.current.value,
        details : details.current.value,
    }
    props.onNewData(dataList);
    clear();
}

let clear = ()=>{
    userName.current.value = ""
    password.current.value = ""
    notes.current.value = ""
    details.current.value = ""
}
return(
    <form onSubmit={onSubmithandlaer}>
            <input type="text" placeholder="User Name" ref={userName}/>
            <input type="number" placeholder="Password" ref={password}/>
            <input type="date" placeholder="Notes" ref={notes}/>
            <input type="text" placeholder="Details" ref={details}/>
            <button type='submit'>Save</button>
        </form>
)
}

export default HeaderForm;

// console.clear()