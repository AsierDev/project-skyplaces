import React, { Component } from 'react';
import './App.css';
import Inputs from './components/inputs'


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
    this.setState({ inputLocation: input })
  }

  addType = input => {
    this.setState({ inputType: input })
  }

  addType



  render() {
    return <div>
      <section className="hero uk-light">
        <header className="uk-padding-small">
          <div className="uk-container uk-flex uk-flex-between">
            <h3 className="logo uk-text-uppercase">skyplaces</h3>
            <a href uk-icon="icon: heart; ratio: 2" />
          </div>
        </header>
        <div className="uk-container uk-container-small uk-align-center uk-padding-large">
          <h1 className="uk-text-center">Busca Restaurantes</h1>

          <Inputs onSubmitLocation={this.addLocation} onSubmitType={this.addType} />

        </div>
      </section>
      <section className="restaurantsgrid">
        <div className="uk-container uk-block">
          <div className="uk-grid-width-1-3@m" uk-grid />
        </div>
      </section>
    </div>;
  }
}

export default App;
