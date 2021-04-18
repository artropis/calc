const fns = require("./fns.js");

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

function loop() {
    readline.question(
        "Ingrese función (sum, res, mul, div, pow, exit): ",
        (fnName) => {
            if (fnName === "exit") {
                console.log("👋👋👋");
                return readline.close();
            }

            const fn = fns[fnName];

            readline.question("Ingrese 2 numeros (separado por un espacio): ", (numbers) => {
                //aclaracion de que los numeros se deben ingresar separado por un espacio. Modificado por Martin
                const [a, b] = numbers.split(" ").map(Number);
                console.log(fn(a, b));
                loop();
            });
        }
    );
}

loop();
