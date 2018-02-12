let placesApi
(function () {
    'use strict'

   /*  const baseUrl = 'https://maps.googleapis.com/maps/api/place/' */
   /*  let typeOfSearch =''
   let location =''
   let type =''
   let keyword ='' */

   
   function call(path) {
       return fetch(`https://maps.googleapis.com/maps/api/place/${path}&key=${inst.apiKey}`)
       .then(res => res.json()) 


    }
    
    const inst = {

        apiKey:'AIzaSyA03rFBRwkZ-wDk_obsSKuP4TovEm5GlN4',
        
        searchRestaurants: (query) => call(`textsearch/json?query=${query}`)
            .then(res => res)

    }



    placesApi = inst

})()