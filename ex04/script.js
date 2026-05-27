let vetorOriginal = [];
let vetorSemDuplicatas = [];
let indiceNovoVetor = 0;

for (let i = 0; i < 10; i++) {
    vetorOriginal[i] = parseInt(prompt("Digite o " + (i + 1) + "° número:"));
}
for (let i = 0; i < 10; i++) {
    let ehDuplicado = false;

    for (let j = 0; j < indiceNovoVetor; j++) {
        if (vetorOriginal[i] === vetorSemDuplicatas[j]) {
            ehDuplicado = true;
            break;
        }
    }
    if (!ehDuplicado) {
        vetorSemDuplicatas[indiceNovoVetor] = vetorOriginal[i];
        indiceNovoVetor++;
    }
}

alert("Vetor original: " + vetorOriginal);
alert("Vetor sem duplicatas: " + vetorSemDuplicatas);