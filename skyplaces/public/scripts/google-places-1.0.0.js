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

  const places = new google.maps.places.PlacesService(document.createElement('div'))

  const inst = {
    /**
     * Searches places by query.
     * 
     * @see https://developers.google.com/maps/documentation/javascript/places
     *
     * @param {String} query - The text to match in the search.
     * @returns {Promise} - A promise that resolves if API call succeeds, otherwise rejects.
     */
    search: (query, location) => new Promise((resolve, reject) => {
      const request = { query, rankby: 'distance' }
      if (location) request.location = new google.maps.LatLng(location.lat, location.long);
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
