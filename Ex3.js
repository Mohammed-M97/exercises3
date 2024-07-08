// Sum Numbers
function sum (numbers) {
    if (!numbers) {
        return 0
    }
    let sumNum = 0
    for (let i = 0; i < numbers.length; i++) {
        sumNum += numbers[i]
    }
    return sumNum
};

console.log(sum([]));