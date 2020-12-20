import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './page/home';
import About from './page/about';
import NavBar from './components/navBar';
import Alert from './components/alert';
import AlertState from './context/alert/AlertState'


function App() {
  return (
    <AlertState>
    <BrowserRouter>
     <NavBar/>
      <div className="container pt-4">
        <Alert/>
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/about'} component={About} />

        </Switch>
      </div>
    </BrowserRouter>
    </AlertState>
  );
}

export default App;

