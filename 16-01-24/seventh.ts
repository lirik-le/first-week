/* В переменной month лежит какое-то число из интервала от 1 до 12(можно рандомайзер сделать).
Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
В переменной year лежит какой то год например 2022. Определите високосный это год или нет. */

type Seasons = 'зима' | 'весна' | 'лето' | 'осень';

const month: number = Math.floor(Math.random() * 12) + 1;
const year: number = Math.floor(Math.random() * 124) + 1900;

const season: Seasons =
    (month >= 1 && month <= 2) || month === 12 ? "зима" :
        (month >= 3 && month <= 5) ? "весна" :
            (month >= 6 && month <= 8) ? "лето" : "осень"


const isLeapYear: boolean = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

console.log(`${month} месяц это ${season}`);
console.log(`Год ${year} ${isLeapYear ? "високосный" : "не високосный"}`);
