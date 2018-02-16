import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from "react-router-dom"
import './App.css'

import Inputs from './components/inputs'
import GridPlaces from './components/GridPlaces'

import ModalPlace from './components/ModalPlace'
import Favorites from './components/Favorites'
import OpenPlacesButton from './components/OpenPlacesButton'






class App extends Component {
    constructor() {
        super()
        this.state = {
            inputType: '',
            inputLocation: '',
            places: [],
            favorites: [],
            spinner: 'hidden'
        }
    }





    componentDidMount() {
        placesApi.init() // eslint-disable-line
            .then(() => {
                this.setState({spinner: 'spinner'})

                navigator.geolocation.getCurrentPosition((position) => {
                    const lat = position.coords.latitude
                    const long = position.coords.longitude
                    this.setState({lat, long})


                    placesApi.search('restaurants', {lat, long})// eslint-disable-line
                        .then(places => this.setState({ places: places, spinner: 'hidden' }))

                });



            })
            .catch(console.error)

    }

    addLocation = input => {
        this.setState({ inputLocation: input, currentLocation: '' })

    }

    addType = input => {
        this.setState({ inputType: input })
    }

    searchPlaces = (query) => {

        if(this.state.inputLocation) this.setState({lat:'',long:''})
        const lat = this.state.lat
        const long = this.state.long
        placesApi.search(query, {lat,long})// eslint-disable-line
            .then(places => this.setState({ places: places }))

    }

    addFav = fav => {
        this.setState(prevState => {
            return {
                favorites: [...prevState.favorites, fav]
            }
        })
    }

    showOpenPlaces = () =>{
        this.setState(prevState => ({ places: prevState.places.filter(place => place.openning_hours.open_now)}) )


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
                        

                    </div>
                </header>
                <div className="uk-container uk-container-small uk-align-center uk-padding-large">
                    <h1 className="uk-text-center">Busca Restaurantes</h1>

                    <Router>
                        <Route  path="/" render={() =>
                        <Inputs onSubmitLocation={this.addLocation}
                            onSubmitType={this.addType}
                                onSearchPlaces={this.searchPlaces} />} />
 
 
                    </Router>
                       

                </div>
            </section>


            <section className="places-grid">
                <div className="uk-container">




                    <Router>
                        <Route path="/fav" render={() => 
                        <Favorites favorites={this.state.favorites}/>}/>
                    </Router>
    

                    <Router>
                        <Route exact path="/" render={() =>
                            <GridPlaces places={this.state.places} onClickFav={this.addFav} />} />
                    </Router>




                </div>

            </section>

            <ul className={this.state.spinner}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>





        </div>
    }
}

export default App;

