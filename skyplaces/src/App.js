import React, { Component } from 'react';
import './App.css';
import placeDefault from './images/default.jpg';
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





  render() {
    return <div>
      <section className="hero uk-light">
        <header className="uk-padding-small">
          <div className="uk-container uk-flex uk-flex-between">
            <h3 className="logo uk-text-uppercase">skyplaces</h3>
            <a href data-uk-icon="icon: heart; ratio: 2" />
          </div>
        </header>
        <div className="uk-container uk-container-small uk-align-center uk-padding-large">
          <h1 className="uk-text-center">Busca Restaurantes</h1>

          <Inputs onSubmitLocation={this.addLocation} onSubmitType={this.addType} />

        </div>
      </section>


      <section className="places-grid">
        <div className="uk-container">
          <h1 className="section-title uk-margin-large-top uk-text-center uk-text-uppercase">Restaurants
            around you</h1>
          <div className="uk-flex uk-flex-center uk-margin-large">
            <div className="uk-button uk-button-primary">Show Only Open Places</div>
          </div>

          <div className=" uk-grid-large uk-child-width-1-3@m"
               data-uk-grid-parallax>
            <div className="item   uk-inline-clip uk-transition-toggle ">
              <div className="uk-panel uk-inline-clip uk-transition-toggle">
                <img src={placeDefault}
                     className="uk-transition-scale-up uk-transition-opaque"/>
                <div className="uk-overlay uk-overlay-primary uk-transition-slide-top uk-text-center uk-position-cover uk-light">
                  <div className="uk-margin-remove uk-position-center uk-padding">
                    <h3 className="place-name uk-text-uppercase">
                      Restaurant name
                    </h3>
                    <p className="rating">Rating: 4.5</p>
                  </div>

                </div>

              </div>
            </div>
            <div className="item   uk-inline-clip uk-transition-toggle">
              <div className="uk-panel  uk-inline-clip uk-transition-toggle">
                <img src={placeDefault}
                     className="uk-transition-scale-up uk-transition-opaque"/>
                <div className="uk-overlay uk-overlay-primary uk-transition-slide-top uk-text-center uk-position-cover uk-light">
                  <div className="uk-margin-remove uk-position-center uk-padding">
                    <h3 className="place-name uk-text-uppercase">
                      Restaurant name
                    </h3>
                    <p className="rating">Rating: 4.5</p>
                  </div>

                </div>

              </div>
            </div>
            <div className="item  uk-inline-clip uk-transition-toggle">
              <div className="uk-panel uk-inline-clip uk-transition-toggle">
                <img src={placeDefault}
                     className="uk-transition-scale-up uk-transition-opaque"/>
                <div className="uk-overlay uk-overlay-primary uk-transition-slide-top uk-text-center uk-position-cover uk-light">
                  <div className="uk-margin-remove uk-position-center uk-padding">
                    <h3 className="place-name uk-text-uppercase">
                      Restaurant name
                    </h3>
                    <p className="rating">Rating: 4.5</p>
                  </div>

                </div>

              </div>
            </div>
            <div className="item  uk-inline-clip uk-transition-toggle">
              <div className="uk-panel uk-inline-clip uk-transition-toggle">
                <img src={placeDefault}
                     className="uk-transition-scale-up uk-transition-opaque"/>
                <div className="uk-overlay uk-overlay-primary uk-transition-slide-top uk-text-center uk-position-cover uk-light">
                  <div className="uk-margin-remove uk-position-center uk-padding">
                    <h3 className="place-name uk-text-uppercase">
                      Restaurant name
                    </h3>
                    <p className="rating">Rating: 4.5</p>
                  </div>

                </div>

              </div>
            </div>
            <div className="item  uk-inline-clip uk-transition-toggle">
              <div className="uk-panel uk-inline-clip uk-transition-toggle">
                <img src={placeDefault}
                     className="uk-transition-scale-up uk-transition-opaque"/>
                <div className="uk-overlay uk-overlay-primary uk-transition-slide-top uk-text-center uk-position-cover uk-light">
                  <div className="uk-margin-remove uk-position-center uk-padding">
                    <h3 className="place-name uk-text-uppercase">
                      Restaurant name
                    </h3>
                    <p className="rating">Rating: 4.5</p>
                  </div>

                </div>

              </div>
            </div>
            <div className="item  uk-inline-clip uk-transition-toggle">
              <div className="uk-panel uk-inline-clip uk-transition-toggle">
                <img src={placeDefault}
                     className="uk-transition-scale-up uk-transition-opaque"/>
                <div className="uk-overlay uk-overlay-primary uk-transition-slide-top uk-text-center uk-position-cover uk-light">
                  <div className="uk-margin-remove uk-position-center uk-padding">
                    <h3 className="place-name uk-text-uppercase">
                      Restaurant name
                    </h3>
                    <p className="rating">Rating: 4.5</p>
                  </div>

                </div>

              </div>
            </div>
            <div className="item  uk-inline-clip uk-transition-toggle">
              <div className="uk-panel uk-inline-clip uk-transition-toggle">
                <img src={placeDefault}
                     className="uk-transition-scale-up uk-transition-opaque"/>
                <div className="uk-overlay uk-overlay-primary uk-transition-slide-top uk-text-center uk-position-cover uk-light">
                  <div className="uk-margin-remove uk-position-center uk-padding">
                    <h3 className="place-name uk-text-uppercase">
                      Restaurant name
                    </h3>
                    <p className="rating">Rating: 4.5</p>
                  </div>

                </div>

              </div>
            </div>
            <div className="item  uk-inline-clip uk-transition-toggle">
              <div className="uk-panel uk-inline-clip uk-transition-toggle">
                <img src={placeDefault}
                     className="uk-transition-scale-up uk-transition-opaque"/>
                <div className="uk-overlay uk-overlay-primary uk-transition-slide-top uk-text-center uk-position-cover uk-light">
                  <div className="uk-margin-remove uk-position-center uk-padding">
                    <h3 className="place-name uk-text-uppercase">
                      Restaurant name
                    </h3>
                    <p className="rating">Rating: 4.5</p>
                  </div>

                </div>

              </div>
            </div>
            <div className="item  uk-inline-clip uk-transition-toggle">
              <div className="uk-panel uk-inline-clip uk-transition-toggle">
                <img src={placeDefault}
                     className="uk-transition-scale-up uk-transition-opaque"/>
                <div className="uk-overlay uk-overlay-primary uk-transition-slide-top uk-text-center uk-position-cover uk-light">
                  <div className="uk-margin-remove uk-position-center uk-padding">
                    <h3 className="place-name uk-text-uppercase">
                      Restaurant name
                    </h3>
                    <p className="rating">Rating: 4.5</p>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

      </section>
    </div>;
  }
}

export default App;
