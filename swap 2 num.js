var arr = userInput[0].split(" ");
var temp;
var ind =0;

temp = arr[ind];
arr[ind] = arr[ind+1];
arr[ind+1] = temp
console.log(arr.join(' '));