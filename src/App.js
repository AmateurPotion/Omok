import React from 'react';
import { Route } from 'react-router-dom';
import { Gameboard, Joinform } from './pages';

function App() {
  return (
    <>
      <Route exact path="/" component={Joinform}/>
      <Route path="/board" component={Gameboard}/>
    </>
  );
}

export default App;