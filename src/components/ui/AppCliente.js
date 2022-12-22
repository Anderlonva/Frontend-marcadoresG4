import React from 'react'
import { HeaderCliente } from './HeaderCliente'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { EventoView } from '../../components/eventos/EventoView'

export const AppCliente = () => {
    return (
        <>
            <HeaderCliente />
            <Router>
                <Switch>
                <Route exact path="/eventos-cards" component={ EventoView } />
                </Switch>
            </Router>
        </>
    )
}
