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
    if (b === 0) {
        return "Error: div by 0";
    } else {
        return a / b;
    }
    // retorna a/b, salvo que b sea 0. Agreado por Augusto.
}

function pow(a, b) {
    return a**b;
    //retorna a^b. Agregado por Martin Gerbaldo
}
module.exports = fns;
