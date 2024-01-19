/*Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку,
а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку,
а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords,
который принимает строку и делает заглавной первую букву каждого слова этой строки.*/

class MyString {
    reverse (str: string): string {
        return str.split('').reverse().join('');
    }

    ucFirst (str: string): string {
        return str[0].toUpperCase() + str.slice(1);
    }

    ucWords (str: string): string {
        return str.split(' ').map(ucWord => ucWord.charAt(0).toUpperCase() +  ucWord.slice(1)).join(' ');
    }
}

const ucMyWord = new MyString();


console.log(ucMyWord.reverse('qwe qwe qwe'));
console.log(ucMyWord.ucFirst('qwe qwe qwe'));
console.log(ucMyWord.ucWords('qwe qwe qwe'));
