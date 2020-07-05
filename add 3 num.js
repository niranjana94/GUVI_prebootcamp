var arr = userInput[0].split(" ");
var sum = 0;

for(var ind =0;ind<arr.length;ind++)
{
 sum += parseInt(arr[ind]);
}

console.log(sum);