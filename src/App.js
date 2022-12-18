import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Header } from './components/ui/Header';
import { Footer } from "./components/ui/Footer";
import { EventoView } from './components/eventos/EventoView'; 
import { UsuarioView } from './components/usuarios/UsuarioView'
import { EquipoView }  from './components/equipos/EquipoView'
import { UsuarioUpdate } from './components/usuarios/UsuarioUpdate'
import { EventoUpdate } from "./components/eventos/EventoUpdate";

function App() {
  return (
    <>
      <Header/>
      <Router>
            <Switch>
                <Route exact path="/" component={ EventoView } />
                <Route exact path="/usuarios" component={ UsuarioView }/>
                <Route exact path="/equipos" component={ EquipoView }/>
                <Route exact path="/evento/edit/:eventoId" component={ EventoUpdate }/> 
                <Route exact path="/usuario/edit/:usuarioId" component={ UsuarioUpdate }/>
                <Redirect to='/'/>
            </Switch>
        </Router>
    </>
  );
}

export default App;