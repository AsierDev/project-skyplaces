import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import '../public/scripts/google-places-1.0.0'

class App extends Component {
    constructor(){
        super()
        this.state = {
            inputType:'',
            inputLocation:'',
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
  render() {
    return (
        <div>
            <section className="hero uk-light">
                <header className="uk-padding-small">
                    <div className="uk-container uk-flex uk-flex-between">
                        <h3 className="logo uk-text-uppercase">skyplaces</h3>
                        <a href uk-icon="icon: heart; ratio: 2" />
                    </div>
                </header>
                <div className="uk-container uk-container-small uk-align-center uk-padding-large">
                    <h1 className="uk-text-center">Busca Restaurantes</h1>
                    <form className="uk-grid-small " uk-grid>
                        <div className="uk-width-1-2@m">
                            <label htmlFor="select-food">Que quieres comer?</label>
                            <select name className="uk-select" id="select-food">
                                <option>ver todos los restaurantes</option>
                                <option>chino</option>
                                <option>tapas</option>
                                <option>thailandes</option>
                                <option>italiano</option>
                                <option>thailandes</option>
                                <option>japones</option>
                                <option>tex-mex</option>
                                <option>sushi</option>
                            </select>
                        </div>
                        <div className="uk-width-1-2@m">
                            <label htmlFor="choose-place">Donde?</label>
                            <input type="text" id="choose-place" className="uk-input" placeholder="Indica ciudad o barrio" />
                        </div>
                    </form>
                </div>
            </section>
            <section className="restaurantsgrid">
                <div className="uk-container uk-block">
                    <div className="uk-grid-width-1-3@m" uk-grid />
                </div>
            </section>
        </div>
    );
  }
}

export default App;
