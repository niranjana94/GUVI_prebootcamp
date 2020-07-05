var myarray=[11,22,33,44,55]; 

 var obj= {};
 for (var ind = 0; ind<myarray.length; ind ++)
 {
 
 if(obj[myarray[ind]]=== undefined)
 {
 obj[myarray[ind]] = 1;
 }
 else
 {
 obj[myarray[ind]]= obj[myarray[ind]]+1;
 }
 
 } 

console.log(obj);
