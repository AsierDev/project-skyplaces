import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Inputs from './components/inputs'
import GridPlaces from './components/GridPlaces'
import ModalPlace from './components/ModalPlace'
import Favorites from './components/Favorites'



class App extends Component {
    constructor() {
        super()
        this.state = {
            inputType: '',
            inputLocation: '',
            places: [],
            favorites: ["Casa Pepe", "La Tasca de Paco"]
        }
    }

    componentDidMount() {
        placesApi.init() // eslint-disable-line
            .then(() => {
                this.setState // TODO switch spinner off
            })
            .catch(console.error)
    }

    addLocation = input => {
        this.setState({ inputLocation: input })
    }

    addType = input => {
        this.setState({ inputType: input })
    }

    searchPlaces = (query) => {
        placesApi.search(query) // eslint-disable-line
            .then(places => this.setState({ places: places }))

    }




    render() {
        return <div>
            <section className="hero uk-light">
                <header className="uk-padding-small">
                    <div className="uk-container uk-flex uk-flex-between">

                    <Router>
                    <Link to="/"><h3 className="logo uk-text-uppercase">skyplaces</h3></Link>
                    </Router>


                        <Router>
                            <Link to="/fav"><a href
                                data-uk-icon="icon: heart; ratio: 2" /></Link>
                        </Router>

                            {/* <Favorites /> */}
                        

                    </div>
                </header>
                <div className="uk-container uk-container-small uk-align-center uk-padding-large">
                    <h1 className="uk-text-center">Busca Restaurantes</h1>

                    <Inputs onSubmitLocation={this.addLocation}
                        onSubmitType={this.addType}
                        onSearchPlaces={this.searchPlaces} />

                </div>
            </section>

           {/*  <Router>
                <Route exact path="/" component={GridPlaces} />
            </Router>  */}

            <section className="places-grid">
                <div className="uk-container">
                    <h1 className="section-title uk-margin-large-top uk-text-center uk-text-uppercase">Restaurants
                        around you</h1>
                    <div className="uk-flex uk-flex-center uk-margin-large">
                        <div className="uk-button uk-button-primary">Show Only Open Places</div>
                    </div>
                    <Router>
                        <Route path="/fav" component={Favorites} />
                    </Router>
    

                     <GridPlaces places={this.state.places} /> 




                </div>

            </section>

            <ModalPlace />



        </div>
    }
}

export default App;
