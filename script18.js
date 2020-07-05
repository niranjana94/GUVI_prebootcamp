let countdown = 100;
while (countdown > 0) 
{
  countdown--;
  clearTimeout(countdown);
  break;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}