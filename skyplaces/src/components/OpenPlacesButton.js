import React from 'react'

function OpenPlacesButton(props) {

    return <div className="uk-flex uk-flex-center uk-margin-large">
        <div className="uk-button uk-button-primary" onClick={props.onShowOpenPlaces()}>Show Only Open Places</div>
    </div>

}

export default OpenPlacesButton