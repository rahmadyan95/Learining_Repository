
class Calculator{
    constructor() {
        console.log("KALKULATOR JALAN V4");
    }

    // add(a, b) {
    //     return a + b;
    // }

    // subtract(a, b) {
    //     return a - b;
    // }

    // multiply(a, b) {
    //     return a * b;
    // }

    // divide(a, b) {
    //     if (b === 0) {
    //         throw new Error("Tidak bisa membagi dengan nol!");
    //     }
    //     return a / b;
    // }

}

module.exports = {Calculator}

const calc = new Calculator(); // <- harus pakai ()
console.log(calc.add(10, 5));  // output: 15
console.log(calc.divide(20, 4)); // output: 5
