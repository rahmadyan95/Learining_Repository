
class Calculator{
    constructor() {
        console.log("Calculator initialized 18");
    }

    tambahan(a, b) {
        return a + b;
    }

    pengurangan(a, b) {
        return a - b;
    }

    perkalian(a, b) {
        return a * b;
    }

    pembagian(a, b) {
        if (b === 0) {
            throw new Error("Tidak bisa membagi dengan nol!");
        }
        return a / b;
    }

}

module.exports = {Calculator}

const calc = new Calculator(); // <- harus pakai ()
console.log(calc.add(10, 5));  // output: 15
console.log(calc.divide(20, 4)); // output: 5
