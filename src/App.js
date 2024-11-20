import logo from './logo.svg';
import './App.css';

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inicio from "./pages/Inicio";
import DetalleTarea from "./pages/DetalleTarea";
import CrearTarea from "./pages/CrearTarea";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/tarea/:id" component={DetalleTarea} />
          <Route path="/crear" component={CrearTarea} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
