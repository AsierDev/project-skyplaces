let placesApi
(function () {
    'use strict'
   const baseUrl = 'https://maps.googleapis.com/maps/api/place/'
    const token ='AIzaSyBCQeZj5UcFcypoQd4LIGUIsSRprO4dhK4'
    let typeOfSearch =''
    let location =''
    let type =''
    let keyword =''

    placesApi = {
        baseUrl,
        call: function (url) {
            return fetch(url)
                .then(res => res.json)
        }
    }

})()