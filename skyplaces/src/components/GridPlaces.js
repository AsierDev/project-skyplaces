import React, { Component } from 'react'
import ModalPlace from './ModalPlace'
import DefaultImg from '../images/defaultImg.jpg'


class GridPlaces extends Component {
    constructor(props) {
        super(props)
        this.state = {
            placeId: '',
            places: [],
            spinner: 'spinner'
        }
    }

    search(cuisine, location) {
        if (cuisine && location)
            placesApi.search(`restaurants ${cuisine} ${location}`) // eslint-disable-line
                .then(places => this.setState({ places: places, spinner: 'hidden' }))
        else if (cuisine && !location) {
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude
                const long = position.coords.longitude

                placesApi.search(`restaurants ${cuisine}`, { lat, long }) // eslint-disable-line
                    .then(places => this.setState({ places: places, spinner: 'hidden' }))
            })            
        } else 
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude
                const long = position.coords.longitude

                placesApi.search(`restaurants`, { lat, long }) // eslint-disable-line
                    .then(places => this.setState({ places: places, spinner: 'hidden' }))
            })
    }

    componentDidMount() {
        this.search(this.props.match.params.cuisine, this.props.match.params.location)
    }

    componentWillReceiveProps(props) {
        this.search(props.match.params.cuisine, props.match.params.location)
    }

    sendFavorite = fav => {
        this.props.onClickFav(fav)
        console.log(this.props)
    }

    selectPlace = placeId => {
        this.setState({
            placeId
        })

    }

    closeModal = () => {
        this.setState({
            placeId: ''
        })


    }

    render() {
        if (!this.state.places.length)
            return <ul className={this.state.spinner}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

        return (
            <div>

                <h1 className="section-title uk-margin-large-top uk-text-center uk-text-uppercase">Restaurants
                        around you</h1>

                <div className="uk-child-width-1-3@m"
                    data-uk-grid-parallax>
                    {this.state.places.map(place => <div>
                            <div class="uk-card uk-card-default" key={place.place_id}>
                                <div class="uk-card-media-top">
                                    <img src={place.photos ? place.photos[0].getUrl({
                                        maxWidth: 800,
                                        maxHeight: 800
                                    }) : DefaultImg}/>
                                </div>
                                <div class="uk-card-body uk-text-center">
                                    <h3 class="uk-card-title"> {place.name}</h3>
                                    <p>{place.formatted_address}</p>
                                    <a href data-uk-icon="icon: heart" onClick={e => {e.preventDefault(); this.sendFavorite(place)}}/>
                                    <p className="rating">rating:{place.rating}</p>
                                    <button className="uk-button uk-button-primary uk-button-small uk-text-center"
                                            type="button"
                                            data={place.place_id}
                                            onClick={e => this.selectPlace(e.target.getAttribute('data'))}>Ver
                                        Restaurante
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}


                </div>

                {/*<ModalPlace placeId = {this.state.placeId} modalClass = {this.state.modalClass} />*/}

                {this.state.placeId ? <ModalPlace placeId={this.state.placeId}
                    onCloseModal={this.closeModal} /> : ''}
            </div>


        )

    }
}


export default GridPlaces