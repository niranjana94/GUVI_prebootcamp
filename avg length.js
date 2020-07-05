const friends = ['Mari','MaryJane','CaptianAmerica','Munnabai','Jeff','AAKchandran'];

var sum =0;
for(var i = 0;i<friends.length ; i++)
{
 sum +=friends[i].length;
}

var avg = sum/friends.length;

console.log("Sum of names " + sum);
console.log("Average " +avg.toFixed(2));