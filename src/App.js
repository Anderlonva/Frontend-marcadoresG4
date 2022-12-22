
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Footer } from "./components/ui/Footer";
import { EventoView } from './components/eventos/EventoView'; 
import { UsuarioView } from './components/usuarios/UsuarioView'
import { EquipoView }  from './components/equipos/EquipoView'
import { UsuarioUpdate } from './components/usuarios/UsuarioUpdate'
import { EventoUpdate } from "./components/eventos/EventoUpdate";
import { EquipoUpdate } from './components/equipos/EquipoUpdate'
import { EquipoCreate } from './components/equipos/EquipoCreate'
import {Inicio} from "./components/InicioSesion/Inicio"
import { Registro } from "./components/InicioSesion/Registro"


function App() {
  return (
    <>
      
      <Router>
            <Switch>
                <Route exact path="/" component={ Inicio } />
                <Route exact path="/registro" component={ Registro } />
                <Route exact path="/eventos" component={ EventoView } />
                <Route exact path="/usuarios" component={ UsuarioView }/>
                <Route exact path="/equipos" component={ EquipoView }/>
                <Route exact path="/evento/edit/:eventoId" component={ EventoUpdate }/> 
                <Route exact path="/usuario/edit/:usuarioId" component={ UsuarioUpdate }/>
                <Route exact path="/equipo/edit/:equipoId" component={ EquipoUpdate }/>
                <Route exact path="/equipo/create" component={ EquipoCreate }/>
                <Redirect to='/'/>
            </Switch>
        </Router>
    </>
  );
}

export default App;
