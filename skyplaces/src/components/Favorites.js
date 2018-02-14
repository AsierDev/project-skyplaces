import React, { Component } from 'react'

function Favorites(props) {

    return (
        <div>
        <h1> Hola Favs! </h1>
        </div>
    )
    
}    
    export default Favorites    



     {/* <div className="uk-child-width-1-3@m"
            data-uk-grid-parallax>
            {this.props.favorites.map(fav => <div className="item uk-inline-clip uk-transition-toggle "
                key={fav.place_id}
            >
                <div className="uk-panel uk-inline-clip uk-transition-toggle">
                    <img src={fav.photos[0].getUrl({ maxWidth: 800, maxHeight: 800 })} />
                    <div className="uk-overlay uk-overlay-primary uk-transition-slide-top uk-text-center uk-position-cover uk-light">
                        <div className="uk-margin-remove uk-position-center uk-padding">
                            <h3 className="place-name uk-text-uppercase">
                                {fav.name}
                            </h3>
                            <h5 className="place-address">{fav.formatted_address}</h5>
                            <p className="rating">rating:{fav.rating}</p>
                            <button className="uk-button uk-button-secondary uk-button-small uk-text-center"
                                type="button"
                                data={fav.place_id}
                                data-uk-toggle={`target: #${fav.place_id}`}
                                onClick={e => this.showPlacesDetails(e.target.getAttribute('data'))}>Ver Restaurante
                                    </button>
                        </div>


                    </div>

                </div>
                <h3 className="uk-text-center uk-remove-margin">{fav.name}</h3>

            </div>
            )}

        </div> */}