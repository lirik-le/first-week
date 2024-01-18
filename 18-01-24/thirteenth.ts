/*Модифицируйте класс Worker из предыдущей задачи следующим образом:
сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.*/

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

    get days(): number {
        return this.#days;
    }

    getSalary(): number {
        return this.#rate * this.#days;
    }
}

const workerWorkers = new MyWorker('Работник', 'Работников', 5, 20);

console.log(workerWorkers.getSalary());
console.log(workerWorkers.name);
