import './App.css';
import Navbar from './components/Navbar';
import EmptyToDo from './components/EmptyToDo';

function App() {
  return (
    <div className="App text-gray-700 dark:text-gray-50 bg-gray-100 dark:bg-gray-900">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <EmptyToDo></EmptyToDo>
    </div>
  );
}

export default App;
