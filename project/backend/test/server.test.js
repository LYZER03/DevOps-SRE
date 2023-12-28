import { expect } from 'chai';
import db from '../index.js';

describe('MySQL', () => {
  it('should connect to MySQL', () => {
    return db.connect()
      .then(() => {
        expect(db.connected).to.eql(true);
      });
  });
});

