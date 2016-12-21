var five = require('johnny-five');
var chipio = require('chip-io');

var board = new five.Board({
  io: new chipio()
});

board.on('ready', function () {
  // Create an LED on the XIO-P0 pin
  var led = new five.Led('XIO-P0');
  led.blink(500);
  console.log(':|');
});

board.hello = function () {
  console.log('123');
};

function hello() {
  console.log('432');
}