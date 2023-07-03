import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  class User {
    email: string;
    name: string;
    city: string = '';
    constructor(email: string, name: string) {
      this.email = email;
      this.name = name;
    }
  }

  const henry = new User('henry@email.com', 'henry');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>{henry.email}</div>
        <div>{henry.name}</div>
        <div>{(henry.city = 'riverside')}</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
