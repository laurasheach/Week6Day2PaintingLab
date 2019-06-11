const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js');

describe('Decorator', function(){

  beforeEach(function(){
    decorator = new Decorator();
    can1 = new Paint(10);
    can2 = new Paint(8);
    room = new Room(18);
  });

  it('should start with an empty paint stock', function(){
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a can of paint to paint stock', function(){
      decorator.addCan(can1);
      const actual = decorator.stock;
      assert.deepStrictEqual(actual, [can1]);
  });

  it('should be able to calculate total litres of paint in stock', function(){
      decorator.addCan(can1);
      decorator.addCan(can2);
      const actual = decorator.totalPaintAmount();
      assert.strictEqual(actual, 18);
  });

  it('should be able to calculate whether there is enough paint to paint a room', function(){
      decorator.addCan(can1);
      let actual = decorator.enoughPaint(room);
      assert.strictEqual(actual, false, 'not enough paint');
      decorator.addCan(can2);
      actual = decorator.enoughPaint(room);
      assert.strictEqual(actual, true, 'enough paint');
  });

  it('should be able to paint room if it has enough paint in stock', function(){
      decorator.paintRoom(room);
      let actual = room.isPainted;
      assert.strictEqual(actual, false);
      decorator.addCan(can1);
      decorator.addCan(can2);
      decorator.paintRoom(room);
      actual = room.isPainted;
      assert.strictEqual(actual, true);
  });

});
