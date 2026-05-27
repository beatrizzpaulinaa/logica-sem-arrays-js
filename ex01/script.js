let numeros = [];
let somaPares = 0;

for (let i = 0; i < 10; i++) {
    numeros[i] = parseInt(prompt("Digite o " + (i + 1) + "° número inteiro"));

    if (numeros[i] % 2 === 0) {
        somaPares += numeros[i];
    }
}

alert("Vetor completo:" + numeros);
alert("Soma apenas dos números pares:" + somaPares);