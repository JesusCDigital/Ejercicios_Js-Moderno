// Se crea una variable la cual contendra el numero que se le aplicara la recursiva
let numeroRecursion = 8; 

//Se crea una variable la cual contendra el if, la funcion y un for para que se le aplique la recursiva al numero aplicando el metodo anterior 
let cuentaAtras = numeroRecursion => {
    if (numeroRecursion != 0) {
        function calcularFactorialb(numeroRecursion) {
            let resultado = 1;
            for (let i = 1; i <= numeroRecursion; i++) {
                resultado *= i;
            }
            return resultado;
        }
        let factorialRecursiva = calcularFactorialb(numeroRecursion);
        console.log(factorialRecursiva);
        return cuentaAtras(numeroRecursion - 1);
    } else (numeroRecursion === 0)
    return;   
};

//Se realiza un console.log para mostrar el resultado al aplicar la resursiva del calculo factorial
console.log("Donde se aplica la recursiva al calculo Factorial en este caso al numero "+numeroRecursion+", dando como resultados: ")
console.log(cuentaAtras(numeroRecursion))
