import React, {Component} from 'react'

class ModalPlace extends Component {
    constructor(props) {
        super(props)
        this.state = {
            placeDetails: {}
        }
    }

    componentDidMount() {
        placesApi.getDetails(this.props.placeId) // eslint-disable-line
            .then(details => this.setState({placeDetails: details}))
    }


    render() {
        return (

            <div>
                <div className={this.state.placeDetails.name ? 'uk-modal uk-open uk-animation-fade uk-modal-full' : ''}
                     data-uk-modal>
                    <div className="uk-modal-dialog  uk-height-viewport">
                        <section className="hero-modal uk-background-cover uk-background-no-repeat uk-light "
                                 style={{
                                     background: `url(${this.state.placeDetails.photos ? this.state.placeDetails.photos[0].getUrl({
                                         maxWidth: 1200,
                                         maxHeight: 600
                                     }) : 'default/image'})`,
                                     // height: "600px"
                                 }}
                        >{this.state.placeDetails.opening_hours ? <div className="open-close uk-align-left">
                            {this.state.placeDetails.opening_hours.open_now ? 'Abierto ahora' : 'Cerrado de momento'}
                        </div> : ''}

                            <span className="uk-align-right"
                                  data-uk-icon="close"
                                  onClick={this.props.onCloseModal}/>
                            <div className="uk-container">
                                <div className="hero-modal-content uk-text-center">
                                    <h2 className="uk-modal-title uk-text-center uk-text-uppercase">{this.state.placeDetails.name ? this.state.placeDetails.name : 'Restaurant'}</h2>

                                    <h3 className="phone uk-text-center">
                                        <a href={`tel:${this.state.placeDetails.international_phone_number ? this.state.placeDetails.international_phone_number : 'Phone' }`}
                                           className="tel u"><span data-uk-icon="icon: receiver"/>{this.state.placeDetails.international_phone_number ? this.state.placeDetails.international_phone_number : 'Phone' }
                                        </a>
                                    </h3>
                                    {this.state.placeDetails.formatted_address ?
                                        <h3 className="address">{this.state.placeDetails.formatted_address}</h3> : '' }
                                    {this.state.placeDetails.url ?
                                        <a className="uk-button uk-button-small uk-button-primary"
                                           href={this.state.placeDetails.url}
                                           target="_blank">Ir a google maps</a> : ''}


                                </div>
                            </div>

                        </section>

                        <div className="uk-container uk-padding-large">

                            <h2 className="uk-text-center reviews">Opiniones</h2>

                                {this.state.placeDetails.reviews ? this.state.placeDetails.reviews.map(review => {
                                    return <div>

                                        <div className="uk-card uk-card-default uk-card-body uk-margin-bottom">
                                            <h3 className="uk-card-title">{review.author_name}</h3>
                                            <h6 className="review-rating">Rating: {review.rating}</h6>
                                            <p>{review.text}</p>
                                        </div>
                                    </div>
                                }) : ''}

                            <h2 className="uk-text-center reviews">Galeria</h2>
                            <div className="uk-child-width-1-3@m" data-uk-grid>
                                {this.state.placeDetails.photos ? this.state.placeDetails.photos.map(pic => {
                                   return  <div>
                                        <div className="uk-card uk-card-default uk-card-body">
                                            <img src={pic.getUrl({maxWidth: 800, maxHeight: 800})}
                                                 alt=""/>

                                        </div>
                                    </div>
                                } ): ''}

                            </div>



                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


export default ModalPlace

