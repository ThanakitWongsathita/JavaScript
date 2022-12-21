let num1 = '150';
let flo1 = '1.50';

//convert string to integer
console.log("\n********convert string to integer********\n");
console.log(parseInt('100'));
console.log(parseInt(num1));
console.log(parseInt('abc'));
console.log(parseInt('0xF'));//hex num

//convert string to float
console.log("\n********convert string to float********\n");
console.log(parseFloat('1.25abc'));
console.log(parseFloat(flo1));
console.log(parseFloat('abc'));

//more convert example
console.log("\n********more convert example********\n");
//number after special character are ignored
console.log(parseInt('1.5'));
console.log(parsparseInteFloat('1+1'));

//using template literal
console.log(parseInt(`${1+1}`));

//convert number to string
console.log("\n********convert number to string********\n");
console.log(num1.toString());
console.log(flo1.toString());
console.log((100).toString());