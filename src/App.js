import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import { Header } from './components/ui/Header';
import { Footer } from "./components/ui/Footer";
import { EventoView } from './components/eventos/EventoView'; 
import { UsuarioView } from './components/usuarios/UsuarioView'
import { EquipoView }  from './components/equipos/EquipoView'
import { UsuarioUpdate } from './components/usuarios/UsuarioUpdate'
import { EquipoUpdate } from './components/equipos/EquipoUpdate'
import { EquipoCreate } from './components/equipos/EquipoCreate'


function App() {
  return (
    <>
      <Header/>
      <Router>
            <Switch>
                <Route exact path="/" component={ EventoView } />
                <Route exact path="/usuarios" component={ UsuarioView }/>
                <Route exact path="/equipos" component={ EquipoView }/>

                <Route exact path="/usuario/edit/:usuarioId" component={ UsuarioUpdate }/>
                <Route exact path="/equipo/edit/:equipoId" component={ EquipoUpdate }/>
                <Route exact path="/equipo/create" component={ EquipoCreate }/>
                <Redirect to='/'/>
            </Switch>
        </Router>
        <Footer/>
    </>
  );
}

export default App;
