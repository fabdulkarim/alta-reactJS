import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/bootstrap.min.css';
import "./assets/css/style.css";


import PageContact from './Pages/contact';
import PageHome from './Pages/home';
import PageAbout from './Pages/about';


function App() {
  return (
    <div>
      <PageAbout />
      {/* <PageHome /> */}
      {/* <PageContact /> */}
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
