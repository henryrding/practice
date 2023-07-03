import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   class User {
//     public email: string;
//     name: string;
//     private city: string = 'Riveride';
//     constructor(email: string, name: string) {
//       this.email = email;
//       this.name = name;
//     }
//   }

function App() {
  class User {
    private readonly city: string = 'Riveride';
    constructor(
      public email: string,
      public name: string
    ) // private userId: string
    {}
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
        {/* <div>{(henry.city)}</div> */}
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
