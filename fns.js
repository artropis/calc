const fns = {
    sum,
    res,
    mul,
    div,
    pow,
};

function sum(a, b) {
    return a + b;
}

// Completar estas funciones

function res(a, b) {
    return a - b;
    //retorna a-b, en ese orden. Agregado por Martin Gerbaldo
}

function mul(a, b){
	//multiplicación de a y b, agregado por Verónica.
	return a * b
}

function div(a, b) {
    // Tener en cuenta division por 0
    // Si b es 0 retornar "Error: div by 0"
}

function pow(a, b) {}

module.exports = fns;
