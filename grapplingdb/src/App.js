import React from 'react';
import { Route, Link } from 'react-router-dom';
import Navi from './Components/Navi';
import Main from './Components/Main';
import About from './Components/About';
import Sc from './Components/Sc';
import Nutrition from './Components/Nutrition';
import Philosophy from './Components/Philosophy';
import './App.css';



function App() {
  return (
    <div>
      <Navi />
      <Route exact path='/' component={Main} />
      <Route exact path='/about' component={About} />
      <Route exact path='/sc' component={Sc} />
      <Route exact path='/nutrition' component={Nutrition} />
      <Route exact path='/philosophy' component={Philosophy} />
    </div>
  );
}

export default App;
