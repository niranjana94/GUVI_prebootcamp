const friends = ['Mari','MaryJane','CaptianAmerica','Munnabai','Jeff','AAKchandran'];

var smallest = friends.reduce(function (a, b) { return b.length > a.length ? a : b; });

console.log(smallest);
