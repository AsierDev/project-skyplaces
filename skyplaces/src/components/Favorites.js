import React, { Component } from 'react'
import DefaultImg from '../images/defaultImg.jpg'
import ModalPlace from './ModalPlace'
import { HashRouter as Router, Route, Link } from "react-router-dom";


class Favorites extends Component {
    constructor(props) {
        super(props)
        this.state = {
            placeId: '',

        }
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
        
        return (
            <div>
                <h2 className="section-title uk-margin-large-top uk-text-center uk-text-uppercase">Saved Restaurants</h2>
                <div className="uk-flex uk-flex-center uk-margin-large">
                    <Router>
                        <Link to="/"><div className="uk-button uk-button-primary" >Go Back</div></Link>
                    </Router>    
                </div> 
            <div className="uk-child-width-1-3@m"
                data-uk-grid-parallax>
                {this.props.favorites.map(fav => <div>
                        <div class="uk-card uk-card-default" key={fav.place_id}>
                            <div class="uk-card-media-top">
                                <img src={fav.photos ? fav.photos[0].getUrl({
                                    maxWidth: 800,
                                    maxHeight: 800
                                }) : DefaultImg}/>
                            </div>
                            <div class="uk-card-body uk-text-center">
                                <h3 class="uk-card-title"> {fav.name}</h3>
                                <p>{fav.formatted_address}</p>
                                <p className="rating">rating:{fav.rating}</p>
                                <button className="uk-button uk-button-primary uk-button-small uk-text-center"
                                        type="button"
                                        data={fav.place_id}
                                        onClick={e => this.selectPlace(e.target.getAttribute('data'))}>Ver
                                    Restaurante
                                </button>
                            </div>
                        </div>
                    </div>
                )}


            </div>



            {this.state.placeId ? <ModalPlace placeId={this.state.placeId}
                onCloseModal={this.closeModal} /> : ''}
        </div>


    )
}
    
}    
    export default Favorites    


