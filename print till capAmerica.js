const friends = ['Mari','MaryJane','CaptianAmerica','Munnabai','Jeff','AAKchandran'];
 
function dataHandling(input)
{
for (var i = 0; i < input.length; i++)
{
 if(input[i] === 'CaptianAmerica' )
  {
      break;
  }
  console.log(input[i]);
}
}
dataHandling(friends);
