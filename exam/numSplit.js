function numberSplit(num)
{
    let num1 = Math.floor(num/2);
    let num2 = num-num1;
    let result = [];
    result.push(num1,num2);
    return result;
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));