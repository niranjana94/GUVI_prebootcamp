var subjGradept = userInput[0].split(" ");

var gpa = 0;

for(var ind=0;ind <subjGradept.length;ind++)
{
    gpa += +subjGradept[ind];
}

var cgpa = gpa/subjGradept.length;

console.log(cgpa);
