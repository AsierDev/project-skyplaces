let placesApi
(function () {
    'use strict'
    const baseUrl = 'https://maps.googleapis.com/maps/api/place/'
    const token ='AIzaSyBCQeZj5UcFcypoQd4LIGUIsSRprO4dhK4'
    let location =''
    let type =''
    let openNow = false;



    placesApi = {
        baseUrl,
        call: function (url) {
            return fetch(url)
                .then(res => res.json())
        },

        searchPlaces: function(type, location, openNow){
            let query = `restaurants+${type}+${location}`
            let searchOpenNow = this.openNow ? '&opennow' : ''
            let url = `${this.baseUrl}textsearch/json?query=${query}${searchOpenNow}&key=AIzaSyBCQeZj5UcFcypoQd4LIGUIsSRprO4dhK4`
            console.log(url)
            console.log(this.token)
            console.log(this.baseUrl)

            return this.call(url)
                .then(res => console.log(res.results))

        }
    }

})()

