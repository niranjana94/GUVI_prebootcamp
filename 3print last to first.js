var numsArr = [1,2,3,4,5,6,7,8,9,10,11];
var new_string=[];

for (var i = 10; i >= 0; i-- ) 
{
 new_string.push(numsArr[i]);
}
console.log(new_string.join(' '));