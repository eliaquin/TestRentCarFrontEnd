import React from 'react';
import Navigation from './components/common/Navigation';
import Clients from './components/clients/Clients';
import AddClient from './components/clients/AddClient';
import Vehicles from './components/vehicles/Vehicles';
import AddVehicle from './components/vehicles/AddVehicle';
import Home from './components/Home.jsx';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <main className="container mt-3">
        <Switch>
          <Route path="/vehicles/add" component={AddVehicle} />
          <Route path="/vehicles" component={Vehicles} />
          <Route path="/clients/add" component={AddClient} />
          <Route path="/clients" component={Clients} />
          <Route path="/" exact component={Home} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
