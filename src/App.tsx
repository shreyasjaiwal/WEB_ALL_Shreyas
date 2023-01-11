import React,{FC,useState} from 'react';
import './App.css';
import { Person,hairColor } from './components/Person';

const App:FC=()=> {
  

  return (
    <div className="App">
      <Person name='Shreyas' age={20} email="shreyas" hairColor={hairColor.Pink}/>
    </div>
  );
}

export default App;
