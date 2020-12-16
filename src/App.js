import React, { Component } from 'react'
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { v4 as uuid } from 'uuid'

import './App.css';


class App extends Component {

   state={
     todos: [
          {id: uuid(),
            title: 'Takeout the trash',
            completed: false
          },
          {id: uuid(),
            title: 'Dinner with wife',
            completed: false
          },
          {id: uuid(),
          title: 'Meeting with boss',
          completed: false 
          }
        ]
        }
  

//this function is used to change the condition of the task i.e. if it is clicked the completed state will change and it will reflect as a line crossing the task or not crossing

   markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
   }


 //this function is used to delete todo item from the screen

 delTodo = (id) =>{
   this.setState({
     todos: [...this.state.todos.filter(todo =>todo.id!== id)]
   });
 }

 addTodo = (title) =>{
   const newTodo = {
    id: 4,
    title: title,
    completed: false
   }
   this.setState({ todos: [...this.state.todos, newTodo]})
 }

  render(){
  

   return (
    <div className="App">
      <div className="container">
      <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
      </div>
  );
}
}

export default App;