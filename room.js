const Room = function(area){
  this.area = area;
  this.isPainted = false;
};

Room.prototype.paint = function(){
  this.isPainted = true;
};






module.exports = Room
