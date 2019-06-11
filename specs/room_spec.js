const assert = require('assert')
const Room = require('../room.js')

describe('Room', function(){

  beforeEach(function(){
    room = new Room(15)
  });

  it('should have an area in square meters', function(){
    const actual = room.area;
    assert.strictEqual(actual, 15);
  });

  it('should start not painted', function(){
    const actual = room.isPainted;
    assert.strictEqual(actual, false);
  });

  it('should be able to painted', function(){
    room.paint()
    const actual = room.isPainted;
    assert.strictEqual(actual, true);
  });

});
