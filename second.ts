// Данна строка 'hello alexandr!' сделать из нее 'hhhhh aaaaaaaaa'

let strAlex: string = 'hello alexandr!';
let letter: string = strAlex[0];

for (let i = 0; i < strAlex.length; i++) {
    if (strAlex[i] === ' ') {
        letter = strAlex[i+1];
        continue;
    }

    strAlex = strAlex.replace(strAlex[i], letter);
}

console.log(strAlex);