/* создать класс calculation, в котором будет одна переменная calculationLine. методы:
setterCalculationLine который будет к переменной приравнивать значение которое передается,
setLastSymbolCalculationLine который будет в конец строки прибавлять символ,
gettercalCulationLine который будет выводить переменную,
lastSymbol получение последнего символа,
deleteLastSymbol удаление последнего символа из строки */

class Calculation {
    calculationLine: string = '';

    setterCalculationLine (calcString: string) {
        this.calculationLine = calcString;
    }

    setLastSymbolCalculationLine (calcString: string) {
        this.calculationLine += calcString.slice();
    }

    gettercalCulationLine () {
        return this.calculationLine;
    }

    lastSymbol () {
        return this.calculationLine.slice(-1);
    }

    deleteLastSymbol () {
        this.calculationLine = this.calculationLine.slice(0, -1);
    }

}

const calcObj = new Calculation();

calcObj.setterCalculationLine('Hello world');
calcObj.setLastSymbolCalculationLine('!');


console.log(calcObj.gettercalCulationLine());
console.log(calcObj.lastSymbol());

calcObj.deleteLastSymbol();

console.log(calcObj.gettercalCulationLine());
