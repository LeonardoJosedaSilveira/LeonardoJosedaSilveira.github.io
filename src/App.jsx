import logo from './logo.svg';
import React from 'react';
import './Css/App.css';
import ProfilePicture from './Components/ProfilePicture'
import ProfileDescription from './Components/ProfileDescription'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ProfilePicture/>
      <ProfileDescription/>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Editing
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
