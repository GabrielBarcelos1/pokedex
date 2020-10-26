import React from 'react'
import {BrowserRouter, Switch , Route }from 'react-router-dom'
import Landing from './components/landing.jsx'
import pokemonDetails from './components/pokemons/pokemonDetails'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route exact path="/pokemon/:pokemonIndex" component={pokemonDetails}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;