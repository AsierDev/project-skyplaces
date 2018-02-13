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
})