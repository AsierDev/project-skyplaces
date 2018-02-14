import React, {Component} from 'react'
import ModalPlace from './ModalPlace'
// import UIkit from '../../public/vendor/uikit/js/uikit'

class GridPlaces extends Component {
    constructor(props) {
        super(props)
        this.state = {
            placeId: '',
            placeFav: false

        }
    }

    sendFavorite = fav => {
        this.props.onClickFav(fav)
        console.log(this.props)
        // this.state.placeId
    }

    selectPlace = placeId => {
        this.setState({
            placeId
        })

    }

    closeModal = () => {
        this.setState({
            placeId:''
        })


    }

    render() {
        return (
            <div>
                <div className="uk-child-width-1-3@m"
                     data-uk-grid-parallax>
                    {this.props.places.map(place => <div className="item uk-inline-clip uk-transition-toggle "
                                                         key={place.place_id}
                        >
                            <div className="uk-panel uk-inline-clip uk-transition-toggle">
                                <img src={place.photos[0].getUrl({maxWidth: 800, maxHeight: 800})}/>
                                <div className="uk-overlay uk-overlay-primary uk-transition-slide-top uk-text-center uk-position-cover uk-light">
                                    <div className="uk-margin-remove uk-position-center uk-padding">
                                        <h3 className="place-name uk-text-uppercase">
                                            {place.name}
                                        </h3>
                                        <h5 className="place-address">{place.formatted_address}</h5>
                                        <a href data-uk-icon="icon: heart" onClick={e => {e.preventDefault(); this.sendFavorite(place)}}/>
                                        <p className="rating">rating:{place.rating}</p>
                                        <button className="uk-button uk-button-secondary uk-button-small uk-text-center"
                                                type="button"
                                                data={place.place_id}
                                                onClick={e => this.selectPlace(e.target.getAttribute('data'))}>Ver
                                            Restaurante
                                        </button>
                                    </div>


                                </div>

                            </div>
                            <h3 className="uk-text-center uk-remove-margin">{place.name}</h3>

                        </div>
                    )}


                </div>

                {/*<ModalPlace placeId = {this.state.placeId} modalClass = {this.state.modalClass} />*/}

                {this.state.placeId ? <ModalPlace placeId={this.state.placeId}
                                                  onCloseModal ={this.closeModal}/> : ''}
            </div>


        )

    }
}


export default GridPlaces