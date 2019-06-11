const Decorator = function(){
  this.stock = [];
};

Decorator.prototype.addCan = function(can){
  this.stock.push(can);
};

Decorator.prototype.totalPaintAmount = function(){
  total = 0;
  for(let can of this.stock){
    total += can.amount;
  }
  return total;
};

Decorator.prototype.enoughPaint = function(room){
  if(this.totalPaintAmount() >= room.area){
    return true;
  } else {
    return false;
  }
};

Decorator.prototype.paintRoom = function(room){
  if(this.enoughPaint(room)){
    room.paint();
  }
};

module.exports = Decorator
