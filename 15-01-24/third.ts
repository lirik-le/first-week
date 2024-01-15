// сделать палиндромы из строк "дим" "манек" "рота" чтоб получилось "димид" "манекенам" "ротатор"

let words: string[] = ['дим', 'манек', 'рота'];

for (let key in words) {
    words[key] = words[key].concat(words[key].split('').reverse().splice(1).join(''));
}

console.log(words);