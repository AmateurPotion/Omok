import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { Gameboard, Joinform } from './pages';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={Joinform}/>
      <Route path="/board" component={Gameboard}/>
    </HashRouter>
  );
}

export default App;