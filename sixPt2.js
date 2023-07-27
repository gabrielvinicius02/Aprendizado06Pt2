// #10 Colocando em prática - Araays
var numeros = [];
var indicesEncontrados  = [];

// Populando o Array
for (let index = 0; index < 10; index++) {
    numeros[index] = prompt("Digite o " + (index + 1) + "° número:"); 
    console.log(numeros[index]);
}

// Procurando o número 
var numeroProcurado = parseInt(prompt("Digite o número que deseja procurar do array:"));
var contador = 0;
for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] == numeroProcurado) { 
        indicesEncontrados[contador] = index;
        contador++;
    }   
}

console.log("O número inserido aparece nos indíces: " + indicesEncontrados)

// #10 Desafio02
// Criando as variáveis
var array = [];
var arrayInvertido = [];

// Populando Array
for (let index = 0; index < 5; index++) {
    var numero = parseInt(prompt("Digite o " + (i + 1) + "° número"));
    array[index] = numero;
}

console.log("Array original: " + array);

// Inverteendo Array
var contador = 4;
for (let index = 0; index < 5; index++) {
    arrayInvertido[index] = array[contador];
    contador--
}

console.log("Array invertido: " + arrayInvertido)

// #10 Desafio03

var numero = parseInt(prompt("Insira um número inteiro e positivo: "));
var fibonacci = [];
fibonacci[0] = numero - 1;
fibonacci[1] = numero;

// Criando o Loop
for (let index = 2; index < 10; index++) {
    fibonacci[index] = fibonacci[index - 1] + fibonacci[index - 2];  
}

console.log("Fibonacci:" + fibonacci)