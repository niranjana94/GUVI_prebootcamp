var length = parseFloat(userInput[0]);

var width = parseFloat(userInput[1]);

var height = parseFloat(userInput[2]);

var basearea = length*width;

var volume = basearea*height;
console.log(volume.toFixed(2));