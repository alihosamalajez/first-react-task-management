import { useEffect, useState } from 'react';
import '../src/app.css';
import Form from './components/HeaderForm'
import Table from './components/Table';
function App() {
  let[myList , setMylist] = useState([])
  let onNewDataHandler = (dataList)=>{
    // setMylist((prev) => {
    //   return[dataList,...prev]
    // })
    saveData(dataList)
  }

  let saveData = (dataList) =>{
    fetch("https://ws-expenses-react-4d457-default-rtdb.firebaseio.com/expenses.json",{
      method : "POST",
      body:JSON.stringify(dataList),
      headers:{
        "content-type":"application/json",
        accept: "application/json"
      },
    }
    ).then(function(response){
      return response.json()
    }).then(function(jsonData){
      dataList.firebase_id = jsonData["name"]
      setMylist((prev) => {
        return[dataList,...prev]
      })
    }).catch(function(error){
      console.log(error)
    })
  }

  let fetchData =() =>{
    fetch("https://ws-expenses-react-4d457-default-rtdb.firebaseio.com/expenses.json",{
      method :"GET",
      headers:{
        accept:"application/json",
      }
    }).then(function(response){
      return response.json()
    }).then(function(jsonData){
      let dataArray = []
      for(let key in jsonData){
        let oneData = jsonData[key];
        oneData.firebase_id = key;
        dataArray.unshift(oneData)
      }
      setMylist(dataArray)
    }).catch(function(error){
      console.log(error)
    })
  }
  useEffect(fetchData , [])

  let onDeletehandler =(firebaseId)=>{
    fetch(`https://ws-expenses-react-4d457-default-rtdb.firebaseio.com/expenses/${firebaseId}.json`,{
      method :"DELETE",
      headers:{
        accept:"application/json",
      }
    }).then(function(response){
      return response.json()
    }).then(function(jsonData){
      let filterArray = myList.filter((ele)=> ele.firebase_id != firebaseId)
      setMylist(filterArray)
    }).catch(function(error){
      console.log(error)
    })
  }


  return (
    <>
      {/* start form */}
      <div className="contant">
          <div className="contant-form">
              <div className="form">
                <h2>New Task Management</h2>
                <Form onNewData={onNewDataHandler} data= {myList}/>
              </div>
          </div>
          <Table myList = {myList} onDelete = {onDeletehandler}/>
      </div>
    </>
  );
}

export default App;
