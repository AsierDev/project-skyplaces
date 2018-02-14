import React, {Component} from 'react'

class ModalPlace extends Component{
    constructor(props){
        super(props)
        this.state={
            placeDetails: {}
        }
    }

    componentDidMount(){
        placesApi.getDetails(this.props.placeId) // eslint-disable-line
            .then(details => this.setState({placeDetails:details}))
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             placeDetails:{ name: 'hello world ' + this.props.placeId }
    //         })
    //     }, 1000)
    // }

    render(){
        return (

            <div>

                <div className={this.state.placeDetails.name? 'uk-modal uk-open uk-animation-fade uk-modal-full':''}  data-uk-modal >
                    <div className="uk-modal-dialog ">
                        {/*<button className="uk-modal-close-default" type="button"  data-uk-close />*/}
                        <span className="uk-align-right" data-uk-icon="close"
                        onClick={this.props.onCloseModal}/>
                        <h2 className="uk-modal-title">{this.state.placeDetails.name}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default ModalPlace

