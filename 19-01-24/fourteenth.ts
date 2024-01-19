/*Модифицируйте класс Worker из предыдущей задачи следующим образом:
 для свойства rate и для свойства days сделайте еще и методы-сеттеры. */

class MyWorker {
    #name: string;
    #surname: string;
    #rate: number;
    #days: number;

    constructor(name: string, surname: string, rate: number, days: number) {
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }

    get name(): string {
        return this.#name;
    }

    get surname(): string {
        return this.#surname;
    }

    get rate(): number {
        return this.#rate;
    }

    set rate(theRate: number) {
        if (theRate <= 0 || theRate >= 100) {
            throw new Error('Рейтинг не может быть меньше 0 и больше 200!');
        }
        this.#rate = theRate;
    }

    get days(): number {
        return this.#days;
    }

    set days(theDays: number) {
        if (theDays < 0) {
            throw new Error('Дней не может быть меньше 0!');
        }
        this.#days = theDays;
    }

    getSalary(): number {
        return this.#rate * this.#days;
    }
}

const workerWorkers = new MyWorker('Работник', 'Работников', 5, 20);
console.log(`${workerWorkers.getSalary()} - первоначальная зп`);

workerWorkers.days = 22;
workerWorkers.rate = 15;

console.log(`${workerWorkers.getSalary()} - зп после изменений`);
