/*Напишите функцию, которая возвращает вложенный массив вида [[key, value], [key, value]]
Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]*/

const arrConverter = (obj: Record<string, number>): [string, number][] => {
    return Object.keys(obj).map(key => [key, obj[key]]);
}

console.log(arrConverter({ a: 1, b: 2 }));