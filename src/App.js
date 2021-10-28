import './App.css';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
import EmptyToDo from './components/EmptyToDo';
import Form from './components/Form';
import LoginForm from './components/LoginForm';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

let element = null;
const empytodo = <EmptyToDo onClick={() => this.handleClick()}></EmptyToDo>,
formElt = <Form ></Form>,
login = <LoginForm></LoginForm>;

function Todolist(){
  return(
    <div className="max-w-md m-auto">
      <p className="text-3xl text-center font-bold my-8">Votre journée aujourd'hui</p>
      <Todo color="#ffb400" title="Etudier HTML & CSS" description="Maîtriser les tableaux"></Todo>
      <Todo color="blue" title="Etudier Javascript" description="Maîtriser les fonctions et les boucles"></Todo>
    </div>
  )
}
  

class App extends Component {
  
    render(){
      return(
        <Router>
          <div className="App text-gray-700 dark:text-gray-50 bg-gray-100 dark:bg-gray-900">
            <header className="App-header">
              <Navbar></Navbar>
              <Switch>
                <Route exact path="/" component={LoginForm}></Route>
                <Route path="/pseudo=:pseudo/new_task" component={Form}></Route>
                <Route path="/tasks" component={Todolist}></Route>
              </Switch>
            </header>
        </div>
        </Router>
      )
    }
}

export default App;
