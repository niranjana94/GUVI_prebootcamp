const friends = ['Mari','MaryJane','CaptianAmerica','Munnabai','Jeff','AAKchandran'];

var longest = friends.reduce(function (a, b) { return a.length > b.length ? a : b; });

console.log(longest);