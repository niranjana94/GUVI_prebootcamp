var addObj= {
 institute:[{
 name :"Guvi",
 lastname : "Geek",
 addressline1 : 8,
 addressline2 :"IIT-M RP",
 city :"Chennai"},
 {
 name :"Amazon",
 lastname : "Inc",
 addressline1 : 31,
 addressline2 :"SP Infocity",
 city :"Chennai"},
 {
 name :"Google",
 lastname : "Alphabet",
 addressline1 : 34,
 addressline2 :"Amphitheater Parkway",
 city :"MountainView"},
 {
 name :"Tesla",
 lastname : "Inc",
    addressline1 : 32,
    addressline2 :"333 Santana Row",
    city :"San Jose"}]}

for(var ind =0;ind<addObj.institute.length;ind++)
{
   console.log(JSON.stringify(Object.values(addObj.institute[ind]))); 
}