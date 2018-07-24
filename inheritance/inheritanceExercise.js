
Function.prototype.inherits = function(SuperClass) {
  function Surrogate() {}
  
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate(); 
  this.prototype.constructor = this;  
};

//// Object.create Version /////
Function.prototype.inherits2 = function(SuperClass) {
  this.prototype = Object.create(SuperClass.prototype);
  this.prototype.constructor = this;
};


function MovingObject () {}

MovingObject.prototype.move = function() {
  return "vrrrrooommmm";
};

function Ship () {}
Ship.inherits2(MovingObject);

function Asteroid () {}
Asteroid.inherits2(MovingObject);


shippy = new Ship(); 
console.log(shippy.move());