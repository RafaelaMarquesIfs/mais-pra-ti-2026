// Questão 1
let numero = Number(prompt("Digite um número inteiro:"));
if (numero % 2 === 0) {
	console.log("Par");
} else {
	console.log("Ímpar");
}

// Questão 2
let idade = Number(prompt("Digite a idade:"));
if (idade < 12) {
	console.log("Criança");
} else if (idade < 18) {
	console.log("Adolescente");
} else if (idade < 60) {
	console.log("Adulto");
} else {
	console.log("Idoso");
}

// Questão 3
let nota = Number(prompt("Digite uma nota de 0 a 10:"));
if (nota >= 7) {
	console.log("Aprovado");
} else if (nota >= 5) {
	console.log("Recuperação");
} else {
	console.log("Reprovado");
}

// Questão 4
let opcao = Number(prompt("Escolha uma opção: 1, 2 ou 3"));
switch (opcao) {
	case 1:
		console.log("Opção 1 selecionada");
		break;
	case 2:
		console.log("Opção 2 selecionada");
		break;
	case 3:
		console.log("Opção 3 selecionada");
		break;
}

// Questão 5
let peso = Number(prompt("Digite o peso:"));
let altura = Number(prompt("Digite a altura:"));
let imc = peso / (altura * altura);
if (imc < 18.5) {
	console.log("Baixo peso");
} else if (imc < 25) {
	console.log("Peso normal");
} else if (imc < 30) {
	console.log("Sobrepeso");
} else {
	console.log("Obesidade");
}

// Questão 6
let a = Number(prompt("Digite o lado A:"));
let b = Number(prompt("Digite o lado B:"));
let c = Number(prompt("Digite o lado C:"));
if (a < b + c && b < a + c && c < a + b) {
	if (a === b && b === c) {
		console.log("Triângulo eqüilátero");
	} else if (a === b || a === c || b === c) {
		console.log("Triângulo Isósceles");
	} else {
		console.log("Triângulo escaleno");
	}
}

// Questão 7
let soma = 0;
let quantidade = 0;
let numero = Number(prompt("Digite um número decimal (0 para encerrar):"));
while (numero !== 0) {
	soma += numero;
	quantidade++;
	numero = Number(prompt("Digite um número decimal (0 para encerrar):"));
}
console.log(soma / quantidade);

// Questão 8
let num = Number(prompt("Digite um número para o fatorial:"));
let fatorial = 1;
for (let i = 1; i <= num; i++) {
	fatorial *= i;
}
console.log(fatorial);

// Questão 9
let fibonacci = [];
let termo1 = 0;
let termo2 = 1;
for (let i = 0; i < 10; i++) {
	fibonacci.push(termo1);
	let proximo = termo1 + termo2;
	termo1 = termo2;
	termo2 = proximo;
}
console.log(fibonacci);

// Questão 10
let nomes = [];
for (let i = 0; i < 7; i++) {
	nomes.push(prompt("Digite um nome:"));
}

nomes.reverse().forEach(nome => console.log(nome));

// Questão 11
let nomes_lista = [];
let idades = [];
for (let i = 0; i < 9; i++) {
	nomes_lista.push(prompt("Digite o nome:"));
	idades.push(Number(prompt("Digite a idade:")));
}
for (let i = 0; i < 9; i++) {
	if (idades[i] < 18) {
		console.log(nomes_lista[i], idades[i]);
	}
}

// Questão 12
function pesoIdeal(altura, sexo) {
	if (sexo === "M") {
		return 72.7 * altura - 58;
	}
	return 62.1 * altura - 44.7;
}
console.log(pesoIdeal(1.75, "M"));

// Questão 13
for (let i = 0; i < 80; i++) {
	let matricula = prompt("Digite a matrícula:");
	let funcionario = prompt("Digite o nome:");
	let salarioBruto = Number(prompt("Digite o salário bruto:"));
	let deducao = salarioBruto * 0.12;
	let salarioLiquido = salarioBruto - deducao;
	console.log("Matrícula: " + matricula);
	console.log("Nome: " + funcionario);
	console.log("Salário bruto: " + salarioBruto);
	console.log("Dedução INSS: " + deducao);
	console.log("Salário líquido: " + salarioLiquido);
}

// Questão 14
function pesquisa14() {
	let somaSalarios = 0;
	let somaFilhos = 0;
	let maiorSalario = 0;
	let quantidadePop = 0;
	let quantidadeAteTrezentosCinquenta = 0;
	let continuar14 = "s";

	while (continuar === "s") {
		let salarioPop = Number(prompt("Digite o salário:"));
		let filhosPop = Number(prompt("Digite o número de filhos:"));
		somaSalarios += salarioPop;
		somaFilhos += filhosPop;
		if (salarioPop > maiorSalario) {
			maiorSalario = salarioPop;
		}
		if (salarioPop <= 350) {
			quantidadeAteTrezentosCinquenta++;
		}
		quantidadePop++;
		continuar = prompt("Deseja informar outra pessoa? (s/n)");
	}

	console.log(somaSalarios / quantidadePop);
	console.log(somaFilhos / quantidadePop);
	console.log(maiorSalario);
	console.log((quantidadeAteTrezentosCinquenta * 100) / quantidadePop);
}

// Questão 15
let mi15 = [];
for (let i = 0; i < 7; i++) {
	mi15[i] = [];
	for (let j = 0; j < 7; j++) {
		if (i === j) {
			mi15[i][j] = 1;
		} else {
			mi15[i][j] = 0;
		}
	}
}
console.log(mi15);

// Questão 16
let m16 = [
	[1, -2, 3, -4, 5, -6, 7, -8],
	[-1, 2, -3, 4, -5, 6, -7, 8],
	[9, -10, 11, -12, 13, -14, 15, -16],
	[-17, 18, -19, 20, -21, 22, -23, 24],
	[25, -26, 27, -28, 29, -30, 31, -32],
	[-33, 34, -35, 36, -37, 38, -39, 40]
];
let c16 = [];
for (let i = 0; i < 6; i++) {
	let negativos16 = 0;
	for (let j = 0; j < 8; j++) {
		if (m16[i][j] < 0) {
			negativos16++;
		}
	}
	c16[i] = negativos16;
}
console.log(c16);

// 17
let cad_pessoa = {
	nome: "Ana",
	idade: 25
};
console.log(cad_pessoa.idade);
cad_pessoa.email = "ana@email.com";
console.log(cad_pessoa);

// Questão 18
let dados = {
	numero: 10,
	texto: "exemplo",
	lista: [1, 2, 3],
	outraLista: ["a", "b"],
	ativo: true
};

function apenasArrays(objeto) {
	let resultado = {};
	for (let chave in objeto) {
		if (Array.isArray(objeto[chave])) {
			resultado[chave] = objeto[chave];
		}
	}
	return resultado;
}

console.log(apenasArrays(dados));

// Questão 19
function combinarObjetos(obj1, obj2) {
	return { ...obj1, ...obj2 };
}

console.log(combinarObjetos({ a: 1, b: 2 }, { b: 3, c: 4 }));

// Questão 20
function contarStrings(array) {
	let objeto = {};
	for (let i = 0; i < array.length; i++) {
		if (objeto[array[i]]) {
			objeto[array[i]]++;
		} else {
			objeto[array[i]] = 1;
		}
	}
	return objeto;
}

console.log(contarStrings(["a", "b", "a", "c", "b", "a"]));

// Questão 21
function totalVendasPorVendedor(vendas) {
	let resumo = {};
	for (let i = 0; i < vendas.length; i++) {
		let vendedor = vendas[i].vendedor;
		if (resumo[vendedor]) {
			resumo[vendedor] += vendas[i].valor;
		} else {
			resumo[vendedor] = vendas[i].valor;
		}
	}
	return resumo;
}

console.log(totalVendasPorVendedor([
	{ vendedor: "Carlos", valor: 100 },
	{ vendedor: "Ana", valor: 200 },
	{ vendedor: "Carlos", valor: 150 }
]));
