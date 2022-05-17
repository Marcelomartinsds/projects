const kelvin = 0;
//The Forecast today is 293 Kelvin

let celsius = kelvin - 273;
// the Celsius is 273 degrees less than Kelvin

let fahrenheit = celsius *(9/5) + 32;
//Fahrenheit is a type of degree

let newton = celsius * (33/100);

fahrenheit = Math.floor(fahrenheit);
//The method .floor() we use to round down the result of Fahrenheit

newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(`The temperature is ${newton} degrees Fahrenheit`);