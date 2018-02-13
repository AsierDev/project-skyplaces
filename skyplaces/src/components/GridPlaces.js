import React from 'react'
import placeDefault from '../images/default.jpg';

function GridPlaces(props) {
    return (
        <div className=" uk-grid-large uk-child-width-1-3@m"
        data-uk-grid-parallax>
            {props.places.map(place => <div className="item uk-inline-clip uk-transition-toggle "
                key={place.place_id}>
                    <div className="uk-panel uk-inline-clip uk-transition-toggle">
                    <img src={place.photos[0].getUrl({ maxWidth: 800, maxHeight: 1200 })}/>
                        <div className="uk-overlay uk-overlay-primary uk-transition-slide-top uk-text-center uk-position-cover uk-light">
                            <div className="uk-margin-remove uk-position-center uk-padding">
                                <h3 className="place-name uk-text-uppercase">
                                    {place.name}
                                </h3>
                                <h5 className="place-address">{place.formatted_address}</h5>
                                <p className="rating">rating:{place.rating}</p>
                            </div>

                        </div>

                    </div>
                <h3 className="uk-text-center uk-remove-margin">{place.name}</h3>
                </div>
            )}

        </div>
            )

            }


export default GridPlaces