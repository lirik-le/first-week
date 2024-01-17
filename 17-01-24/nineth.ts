/* Cортируем этот массив методом пузырька [1,2,3,6,8,1,6,3,2,1,0,4] и склеиваем с массивом строк ['one', 'two','three'],
решенным заданием будет сичтаться массив [0, 1, 1, 1, 2, 2, 3, 3, 4, 6, 6, 8, 'one', 'two','three'] */

let arrayNumbers: number[] = [1,2,3,6,8,1,6,3,2,1,0,4];
let arrayWords: string[] = ['one', 'two','three'];

const bubbleSort = (arr: number[]): number[] => {
    for (let i: number = 0; i < arr.length; i++)
        for (let j: number = 0; j < arr.length; j++)
            arr[j+1] < arr[j] ? ([arr[j+1], arr[j]] = [arr[j], arr[j+1]]) : null;
    return arr;
}

console.log([...bubbleSort(arrayNumbers), ...arrayWords]);