console.log("Shippy ship shippy");


const MovingObject = require("./moving_object.js"); 
const canvasEl = document.getElementsByTagName("canvas")[0];
const ctx = canvasEl.getContext("2d");

movingObj = new MovingObject({ pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}); 
console.log(movingObj);
movingObj.draw(ctx);

window.MovingObject = MovingObject; 