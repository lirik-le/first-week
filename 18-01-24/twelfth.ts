/*Реализуйте класс Worker (Работник), который будет иметь следующие свойства:
 name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).
 Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
 Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days*/

class MyWorker {
    name: string;
    surname: string;
    rate: number;
    days: number;

    constructor(name: string, surname: string, rate: number, days: number) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary(): number {
        return this.rate * this.days;
    }
}

const workerWorkers = new MyWorker('Работник', 'Работников', 5, 20)

console.log(workerWorkers.getSalary())