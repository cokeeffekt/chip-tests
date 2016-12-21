var five = require('johnny-five');
var chipio = require('chip-io');

var board = new five.Board({
  io: new chipio()
});

board.on('ready', function () {
  // Create an LED on the XIO-P0 pin
  var led = new five.Led('XIO-P0');
  led.blink(500);


  var led2 = new five.Led('PWM0');
  // Make it pulse with a 1 second interval
  led2.pulse(1000);

  var thermometer = new chipio.InternalTemperature();
  thermometer.on('change', function (data) {
    console.log('Internal temperature is ' + data.celsius.toFixed(2) + '°C');
  });

  // create battery voltage sensor
  var batteryVoltage = new chipio.BatteryVoltage();

  // listen for value changes
  batteryVoltage.on('change', function (voltage) {
    console.log('Battery voltage is ' + voltage.toFixed(2) + 'V');
  });

});