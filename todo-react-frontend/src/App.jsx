import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo'



export default class App extends React.Component{


render(){
  return(
<div id="App" className="container-fluid">
    <h1>Todo's Manager</h1>
    <h4> Less 4 Todos</h4>
    <div className="row justify-content-center align-items-center">
      <div className="col-6">
        <AddTodo />
      </div>
    </div>

    <div className="row justify-content-center align-items-center">
      <div className="col-5">
      </div>
    </div>
  </div>
  )
}

}



