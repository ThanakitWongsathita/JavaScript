function hightDigit(num)
{
    let highest = 0;
    while (num > 0) {
        let digit = num % 10;
        if (digit > highest) {
            highest = digit;
        }
        num = Math.floor(num / 10);
    }
    return highest;

}

console.log(hightDigit(379));
console.log(hightDigit(2));
console.log(hightDigit(377401));