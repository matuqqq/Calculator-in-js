document.addEventListener("DOMContentLoaded", function () {
    let value1 = document.getElementById("valor1");
    let value2 = document.getElementById("valor2");
    let operador = document.getElementById("op");
    let botonCalcular = document.getElementById("botonCalcular");
    let resultados = document.getElementById("resultado");
    let resultado;

    function funcalcular() {
        let opp = operador.value;
        let op1 = parseFloat(value1.value);
        let op2 = parseFloat(value2.value);
        let resultadonumero = resultados.value;
        resultados.style.color = "green";

        switch (opp) {
            case "+":
                resultado = op1 + op2;
                resultados.innerText = "= " + resultado;
                break;
            case "-":
                resultado = op1 - op2;
                resultados.innerText = "= " + resultado;
                break;
            case "/":
                resultado = op1 / op2;
                resultados.innerText = "= " + resultado;
                break;
            case "*":
                resultado = op1 * op2;
                resultados.innerText = "= " + resultado;
                break;
            case "^":
                resultado = 1;
                while (op2 > 0) {
                    resultado = resultado * op1;
                    op2--;
                }
                resultados.innerText = "= " + resultado;
                break;
            default:
                resultados.style.color = "red";
                resultados.innerText = "Operador invalido";
                break;
        }
    }

    botonCalcular.addEventListener("click", funcalcular);
});
