//PROJECT: KELVIN WEATHER

//Today's forecast, described by a variable named kelvin set to the forecasted tempature in kelvin
const kelvin = 0

//Today's forecast in Celsisu, which is equal to the kelvin temperature minus 273
const celsius = (kelvin - 273);
console.log(celsius);
//Today's forecast in Fahrenheit, which was calculated by multiplying the celsius temperature by 9/5 and then adding 32
let fahrenheit = (celsius * (9/5) + 32);

//The .floor() method used to round down the Fahrenheit temp, since it's often a decimal number when converted from Celsius. To assign this I delcared the farhenheit variable as 'let' which I'm not sure was correct.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// 0 Kelvin in Fahrenheit is -460 degrees. 

let newton = (celsius * (33/100));
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
