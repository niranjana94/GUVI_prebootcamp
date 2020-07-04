var testScore = userInput[0].split(" ");

var avg ,total =0;

for(var ind= 0;ind<testScore.length ; ind++)
{
    total += +testScore[ind];
}

avg = parseFloat(total)/testScore.length;
console.log(avg);