// вывести числа фибаначи до 200

const fibNumbersUpTo = (limit: number): number[] => {
    const fibonacciArr: number[] = [];

    const isFibonacci = (num: number): number => num < 2 ? num : isFibonacci(num - 1) + isFibonacci(num - 2)

    for (let i: number = 0; isFibonacci(i) <= limit; i++)
        fibonacciArr.push(isFibonacci(i));

    return fibonacciArr;
}

console.log(fibNumbersUpTo(200));
