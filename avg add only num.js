const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];

var sum = 0;
var count = 0;

for(var ind =0;ind<friendsInfo.length;ind++)
{
 if(typeof(friendsInfo[ind]) === 'number')
 {
 count++;
 sum +=friendsInfo[ind];
 }
}
var avg = sum/count;
console.log("Average " + avg);