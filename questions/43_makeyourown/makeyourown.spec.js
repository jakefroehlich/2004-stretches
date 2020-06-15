const { Farmville } = require('./makeyourown');

describe('makeyourown functionality', () => {
  it('should be an object', () => {
    let farm = new Farmville;
    expect(typeof farm).toEqual('object');
  });
});
