import React, {Component} from 'react';
import './App.css';

import Inputs from './components/inputs'
import GridPlaces from './components/GridPlaces'
import ModalPlace from './components/ModalPlace'


class App extends Component {
    constructor() {
        super()
        this.state = {
            inputType: '',
            inputLocation: '',
            places: []

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
        this.setState({inputLocation: input})
    }

    addType = input => {
        this.setState({inputType: input})
    }

    searchPlaces = (query) => {
        placesApi.search(query) // eslint-disable-line
            .then(places => this.setState({places: places}))

    }




    render() {
        return <div>
            <section className="hero uk-light">
                <header className="uk-padding-small">
                    <div className="uk-container uk-flex uk-flex-between">
                        <h3 className="logo uk-text-uppercase">skyplaces</h3>
                        <a href
                           data-uk-icon="icon: heart; ratio: 2"/>
                    </div>
                </header>
                <div className="uk-container uk-container-small uk-align-center uk-padding-large">
                    <h1 className="uk-text-center">Busca Restaurantes</h1>

                    <Inputs onSubmitLocation={this.addLocation}
                            onSubmitType={this.addType}
                            onSearchPlaces = {this.searchPlaces}/>

                </div>
            </section>


            <section className="places-grid">
                <div className="uk-container">
                    <h1 className="section-title uk-margin-large-top uk-text-center uk-text-uppercase">Restaurants
                        around you</h1>
                    <div className="uk-flex uk-flex-center uk-margin-large">
                        <div className="uk-button uk-button-primary">Show Only Open Places</div>
                    </div>

                        <GridPlaces places = {this.state.places}/>


                </div>

            </section>

            <ModalPlace/>



        </div>
    }
}

export default App;
