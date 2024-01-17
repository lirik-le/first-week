/*отфильтровать выборкой массив и бинарным поиском найти элемент массив:[6,1,7,3,5,8,0,-1,3,2,4,5] искомое число 0*/

let array: number[] = [6,1,7,3,5,8,0,-1,3,2,4,5];

const selectionSort = (arr: number[]): number[] => {
    for (let i: number = 0; i < arr.length; i++) {
        let indexMin: number = i;

        for (let j: number = i+1; j < arr.length; j++)
            if (arr[j] < arr[indexMin]) indexMin = j;

        [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
    }
    return arr;
}

const binarySearch = (arr: number[], item: number): number => {
    let start: number = 0;
    let end: number = arr.length;
    let middle: number;
    let found: boolean = false;
    let position: number = -1;

    while (!found && start <= end) {
        middle = Math.floor((start + end) / 2);

        if (arr[middle] === item) {
            found = true;
            position = middle;
            return position;
        }

        if (item < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return position;
}

array = selectionSort(array)
console.log(array)

console.log(binarySearch(array, 0))



