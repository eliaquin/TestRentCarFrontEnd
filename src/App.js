import React from 'react';
import Navigation from './components/common/navigation';
import Clients from './components/Clients';
import Vehicles from './components/Vehicles';
import Home from './components/Home.jsx';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <main className="container mt-3">
        <Switch>
          <Route path="/vehicles" component={Vehicles} />
          <Route path="/clients" component={Clients} />
          <Route path="/" exact component={Home} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
