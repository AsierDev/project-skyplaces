/**
 * Google Places client.
 * 
 * @author manuelbarzi
 *
 * @version 1.0.0
 */
let placesApi;
(() => {
  'use strict';

  let places
  let details

  const init = () => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')

      script.onload = () => {
        places = new google.maps.places.PlacesService(document.createElement('div'))

        resolve()
      }
      script.onerror = reject

      script.src = `https://maps.googleapis.com/maps/api/js?key=${inst.key}&libraries=places` // &callback=initMap

      document.head.appendChild(script)
    })
  }

  const inst = {
    key: 'AIzaSyChp6OnyYbZ2HKZSskxFqdzJC1drMGPzVQ',

    init,

    /**
     * Searches places by query.
     * 
     * @see https://developers.google.com/maps/documentation/javascript/places
     *
     * @param {String} query - The text to match in the search.
     * @returns {Promise} - A promise that resolves if API call succeeds, otherwise rejects.
     */
    search: (query, location) => new Promise((resolve, reject) => {
      const request = {query, radius: 1000}
      if(location) request.location = new google.maps.LatLng(location.lat,location.long);
            places.textSearch(request, (results, status) =>
                status === google.maps.places.PlacesServiceStatus.OK ? resolve(results) : reject(Error(`places returned status ${status}`))
            )
        }
    ),
    getDetails: placeId => new Promise((resolve, reject) =>
      places.getDetails({ placeId }, (results, status) =>
        status === google.maps.places.PlacesServiceStatus.OK ? resolve(results) : reject(Error(`places returned status ${status}`))
    ))


  }

  placesApi = inst
})()
