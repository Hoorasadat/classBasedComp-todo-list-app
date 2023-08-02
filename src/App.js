import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {

  const [todos, setTodos] = useState(['Shopping', 'Cooking', 'Cleaning']);

  const addTaskToList = (task) => {
    if (task === '') {
      return;
    }
    setTodos([...todos, task]);
  }


  return (
    <div className="App">
      <Header />
      <TodoForm onTaskAdd = { addTaskToList } />
      <TodoList todoList = { todos } />
      <Footer />
    </div>
  );
}

export default App;
