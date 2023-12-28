import { expect } from 'chai'
import db from '../index.js'


describe('MySQL', () => {
  it('should connect to MySQL', () => {
    expect(db.connected).to.eql(true)
  })
})

