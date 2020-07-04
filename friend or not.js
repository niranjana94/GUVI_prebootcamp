const friends = ['Mari','MaryJane','CaptianAmerica','Munnabai','Jeff','AAKchandran'];
 
function dataHandling(input)
{
for (var i = 0; i < input.length; i++)
{
 
 if(input[i] === "Jeff" )
 {
 
 return true;
 } 
 }
}
let found = dataHandling(friends,'Jeff') ? true :false;
console.log(found);
