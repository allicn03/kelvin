// the const stores the value of kelvin, which will not change
const kelvin = 0;
// this variable stores a fromula to convert  kelvin to celsius.
const celsius = kelvin - 273;
// this variable stores a formula to convert value of celsius to fehrenheit and rounds it down.
const fahrenheit = Math.floor(celsius * (9/5) + 32);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// this variable stores a temperature in Celsius
const celsiusTemp = 68;
//This variable converts celsius to newton
const newton = Math.floor(celsiusTemp * (33/100));

console.log(`Temperature is ${newton} newton`);
