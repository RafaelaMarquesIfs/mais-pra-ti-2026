let vendas_diarias = [100, 150, 200, 250, 300];
let vendas_acumuladas = 0;

for (let i = 0; i < vendas_diarias.length; i++) {
    vendas_acumuladas += vendas_diarias[i];
}

console.log("Vendas acumuladas: " + vendas_acumuladas);

let notas = [8.5, 7.0, 9.0, 6.5, 10.0];
let soma_notas = 0;

for (let i = 0; i < notas.length; i++) {
    soma_notas += notas[i];
}

let media_notas = soma_notas / notas.length;
console.log("Média das notas: " + media_notas.toFixed(2));

busca_numero = [10, 15, 20, 25, 30];
let numero_procurado = 90;
let encontrado = false;

for (let i = 0; i < busca_numero.length; i++) {
    if (busca_numero[i] === numero_procurado) {
        encontrado = true;
        break;
    }
}

if (encontrado) {
    console.log("Número encontrado: " + numero_procurado);
} else {
    console.log("Número não encontrado: " + numero_procurado);
}


let numeros = [5, 10, 15, 20, 25];
let qtd_pares = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        qtd_pares++;
    }
}

console.log("Quantidade de números pares: " + qtd_pares);