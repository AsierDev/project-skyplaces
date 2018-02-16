import React, {Component} from "react"
import { withRouter } from "react-router-dom"

class Inputs extends Component {
    constructor() {
        super()

        this.state = {
            inputLocation: "",
            inputType: ""
        }
    }

    keepInput = inputLocation => this.setState({inputLocation})

    handleChange = e => {
        this.setState({inputType: e.target.value});
    }

    submit() {
        this.setState({inputLocations: ''})

        this.props.history.push(`/restaurants/${this.state.inputType}/${this.state.inputLocation}`)
    }


    render() {
        return <form className="uk-grid-small "
                     data-uk-grid
                     onSubmit={e => {
                         e.preventDefault()

                         this.submit()
                     }}>
            <div className="uk-width-1-2@m">
                <label htmlFor="select-food">Que quieres comer?</label>
                <select name
                        className="uk-select"
                        id="select-food"
                        value={this.state.value}
                        onChange={this.handleChange}>
                    <option>ver todos los restaurantes</option>
                    <option value="chino">chino</option>
                    <option value="tapas">tapas</option>
                    <option value="thailandes">thailandes</option>
                    <option value="italiano">italiano</option>
                    <option value="griego">griego</option>
                    <option value="japones">japones</option>
                    <option value="tex-mex">tex-mex</option>
                    <option value="sushi">sushi</option>
                </select>
            </div>

            <div className="uk-width-1-2@m">
                <label htmlFor="choose-place">Donde?</label>
                <input type="text"
                       id="choose-place"
                       className="uk-input"
                       placeholder="Indica ciudad o barrio"
                       onChange={(e) => this.keepInput(e.target.value)}/>
            </div>
        </form>
    }

}

export default withRouter(Inputs)