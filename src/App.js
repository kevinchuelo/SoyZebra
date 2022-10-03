// import logo from './logo.svg';
import './App.css';
import React  from 'react';
import NavBar from './components/NavBar/NavBar'
import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Counter />
      <ItemListContainer/>
    </div>
  );
}

export default App;
