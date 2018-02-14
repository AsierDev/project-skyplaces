import React, {Component} from 'react'
import placeDefault from '../images/default.jpg';

class GridPlaces extends Component{
    constructor(props){
        super(props)
        this.state={
            placeId:''
        }
    }
    showPlacesDetails = (id) => {
        this.setState({placeId: id})

    }
    render(){
        return (
            <div className="uk-child-width-1-3@m"
                 data-uk-grid-parallax>
                {this.props.places.map(place => <div className="item uk-inline-clip uk-transition-toggle "
                                                key={place.place_id}
                    >
                        <div className="uk-panel uk-inline-clip uk-transition-toggle">
                            <img src={place.photos[0].getUrl({ maxWidth: 800, maxHeight: 800 })}/>
                            <div className="uk-overlay uk-overlay-primary uk-transition-slide-top uk-text-center uk-position-cover uk-light">
                                <div className="uk-margin-remove uk-position-center uk-padding">
                                    <h3 className="place-name uk-text-uppercase">
                                        {place.name}
                                    </h3>
                                    <h5 className="place-address">{place.formatted_address}</h5>
                                    <p className="rating">rating:{place.rating}</p>
                                    <button className="uk-button uk-button-secondary uk-button-small uk-text-center"
                                            type="button"
                                            data={place.place_id}
                                            data-uk-toggle={`target: #${place.place_id}`}
                                            onClick={e => this.showPlacesDetails(e.target.getAttribute('data'))}>Ver Restaurante
                                    </button>
                                </div>

                            </div>

                        </div>
                        <h3 className="uk-text-center uk-remove-margin">{place.name}</h3>

                    </div>
                )}

            </div>
        )

    }
}


export default GridPlaces