import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar';
import StudentsList from './components/studentsList';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <main className='container'>
          <StudentsList></StudentsList>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
