// Данна строка 'DDADSADASDAAADS' вывести все уникальные символы в строке "DAS"

/* const initialStr: string = 'DDASDSADASDAAADS';
const pattern: string = 'DAS';

const matches: string[] = [];

for (let i = 0; i <= initialStr.length - pattern.length; i++) {
    if (initialStr.substring(i, i + pattern.length) === pattern) {
        matches.push(pattern);
    }
}

if (matches.length > 0) {
    console.log(matches.join(', '));
} */


const findUniqueCharacters = (str: string) => {
    return [...new Set(str)].join('');
}

console.log(findUniqueCharacters('DDASDSADASDAAADS'));
