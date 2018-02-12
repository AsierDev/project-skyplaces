'use strict';

class App extends Component {

    componentDidMount() {
        placesApi.init()
            .then(() => {
                this.setState // TODO switch spinner off
            })
            .catch(console.error)        
    }

}

