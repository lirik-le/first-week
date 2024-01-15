// вывести все числа делящиеся только на себя до 100

function isPrimesUpTo(limit: number): number[] {
    const primes: number[] = [];

    const isPrime = (num: number): boolean => {
        for (let prime of primes) {
            if (prime * prime > num) break;
            if (num % prime === 0) return false;
        }
        return true;
    };

    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) primes.push(i);
    }

    return primes;
}

const limit: number = 100;
const primes: number[] = isPrimesUpTo(limit);
console.log(primes);
