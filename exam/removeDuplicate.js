function removeDupe(arr) {
    return [...new Set(arr)];
}

console.log(removeDupe([1,0,1,0]));
console.log(removeDupe(["The","Big","Cat"]));
console.log(removeDupe([1,0,1,0]));