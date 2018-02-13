describe('Google Places client', () => {
  'use strict'

  let target = placesApi

  placesApi = undefined

  beforeEach(() => {
    target.key = 'AIzaSyChp6OnyYbZ2HKZSskxFqdzJC1drMGPzVQ'
  })

  describe('search places', () => {
    let places

    beforeEach(done => {
      target.init()
        .then(() => target.search('restaurante gracia'))
        .then(_places => {
          places = _places
          done()
        })
        .catch(done)
    })

    it('should get results on search', () => {
      expect(places).not.toBeUndefined()

      expect(places.length > 0).toBeTruthy()
    })
  })

  describe('get details', () => {
    let details 

    beforeEach(done => {
      target.init()
        .then(() => target.getDetails('ChIJIeC2ck6rWg0R9mV9KQvNnBY'))
        .then(_details => {
          details = _details

          done()
        })
        .catch(done)
    })

    it('should get results on search', () => {
      expect(details).not.toBeUndefined()
    })
  })

})