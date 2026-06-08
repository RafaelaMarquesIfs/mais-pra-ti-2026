function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}
console.log(calcularMedia(7, 8, 9)); 

function validarMaioridade (idade) {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}
console.log(validarMaioridade(20));
console.log(validarMaioridade(16));

function calculadora(n1, n2, operacao) {
    if (typeof n1 != "number" || typeof n2 != "number") {
        return "Erro: Os valores devem ser números.";
    }

    if (operacao != "soma" && operacao != "subtracao" && operacao != "multiplicacao" && operacao != "divisao") {
        return "Erro: Operação inválida. Use 'soma', 'subtracao', 'multiplicacao' ou 'divisao'.";
    }
    
    switch (operacao) {
        case "soma":
            return n1 + n2;
        case "subtracao":
            return n1 - n2;
        case "multiplicacao":
            return n1 * n2;
        case "divisao":
            if (n2 === 0) {
                return "Erro: Divisão por zero não é permitida.";
            }
            return n1 / n2;
    }   
}

console.log(calculadora(10, 5, "soma"));
console.log(calculadora(10, 5, "subtracao"));
console.log(calculadora(10, 5, "multiplicacao"));
console.log(calculadora(10, 5, "divisao"));
console.log(calculadora(10, 0, "divisao"));
console.log(calculadora(10, 5, "modulo"));
console.log(calculadora("10", 5, "soma"));