var friends1 = ['Mari','MaryJane','CaptianAmerica','Munnabai','Jeff','AAKchandran'];
var friends2 = ['Gabbar','Rajinikanth','Mass','Spiderman','Jeff','ET'];

var friends = [...friends1, ...friends2];
//console.log(friends);

function dataHandling(input)
{
 var sortedFriends = input.sort((a,b) => a-b);
 console.log(sortedFriends);
}
dataHandling(friends);