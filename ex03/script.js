let vetor = [];
let contagem = 0;

for (let i = 0; i < 10; i++) {
    vetor[i] = parseInt(prompt("Digite o " + (i + 1) + "° número inteiro: "));
}
let numeroBuscado = parseInt(prompt("Digite o número que deseja buscar no vetor:"));

for (let i = 0; i < 10; i++) {
    if (vetor[i] === numeroBuscado) {
        contagem++;
    }
}

alert("O número " + numeroBuscado + " aparece " + contagem + " vezes no vetor.");