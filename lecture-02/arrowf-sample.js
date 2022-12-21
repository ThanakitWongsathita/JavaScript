//arrow function with two agruments
const sum = (firstParam,secondParam)=>
{
    return firstParam+ secondParam
};
console.log(sum(2,5));

//arrow function with no agruments
const printHello = ()=>
{
    console.log("hello");
};
printHello();

//arrow function with a single agrument
const checkWeight = (weight)=>
{
    console.log(`Baggage weight : ${weight} kilograms.`);
};
checkWeight

//concise arrow function
const multiply = (a,b)=>a*b;
console.log(multiply(2,30));