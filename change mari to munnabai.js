let friends = ['Mari','MaryJane','CaptianAmerica','Munnabai','Jeff','AAKchandran']; 

function dataHandling(input)
{
for (var i = 0; i < input.length; i++)
{
 if(input[i] === 'Mari' )
  {
      input[i] = 'Munnabai';
  }
}
}
dataHandling(friends);

console.log(friends);