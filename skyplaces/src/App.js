import React, { Component } from 'react'
import { HashRouter, Route, Link } from "react-router-dom"
import './App.css'

import Inputs from './components/inputs'
import AroundButton from './components/AroundButton'
import GridPlaces from './components/GridPlaces'
import Favorites from './components/Favorites'

class App extends Component {
    constructor() {
        super()
        this.state = {
            favorites: [],

        }
    }


    addFav = fav => {
        if (!(this.state.favorites).some(favorite=>favorite.id===fav.id)){

            this.setState(prevState => {
                return {
                    favorites: [...prevState.favorites, fav]
                }
            })
        }
    }

    render() {
        return <HashRouter>
            <div>
                <section className="hero uk-light">
                    <header className="uk-padding-small">
                        <div className="uk-container uk-flex uk-flex-between">
                            <Link to="/"><h3 className="logo uk-text-uppercase">skyplaces</h3></Link>
                            <Link to="/fav"><a href
                                data-uk-icon="icon: heart; ratio: 2" /></Link>
                        </div>
                    </header>
                    <div className="uk-container uk-container-small uk-align-center uk-padding-large">
                        <h1 className="uk-text-center">Busca Restaurantes</h1>
                        <Inputs />

                    </div>
                </section>
                <Link to="/restaurants-around-you"><AroundButton/></Link>
                <section className="places-grid">
                    <div className="uk-container">
                        <Route path="/fav" render={() =>
                            <Favorites favorites={this.state.favorites} />} />
                        <Route exact path="/restaurants-around-you" render={(routeProps) => <GridPlaces {...routeProps} onClickFav={this.addFav} />} />
                        <Route exact path="/restaurants/:cuisine" render={(routeProps) => <GridPlaces {...routeProps} onClickFav={this.addFav} />} />
                        <Route exact path="/restaurants/:cuisine/:location" render={(routeProps) => <GridPlaces {...routeProps} onClickFav={this.addFav}/>  } />
                    </div>
                </section>
            </div>
        </HashRouter>
    }
}

export default App

