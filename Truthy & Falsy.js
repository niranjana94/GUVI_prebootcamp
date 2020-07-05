logTorF(false);

logTorF(null);

logTorF(undefined);

logTorF(NaN);

logTorF(0);

logTorF("");

logTorF(true);

logTorF({});

logTorF([]);

logTorF("string");

logTorF(3.14);

logTorF(new Date());

 function logTorF(val)
{
    if(val)
    console.log(val + " Truthy!");
    else
    console.log(val + " Falsy!");
}
