//Crie um algoritimo que leia o valor inicial da contagem, o valor final e incremento, mostrando em seguida todos os valores no intervalo. Ex: Digite o primeiro Valor: 3; Digite o ultimo  Valor: 10; Digite o incremento: 2; Contagem: 3 5 7 9 Acabou!

let primeiroValor = Number(prompt("Digite o primeiro valor:"));
let ultimoValor = Number(prompt("Digite o último valor:"));
let incremento = Number(prompt("Digite o incremento:"));
let contagem = "";

for(let i = primeiroValor; i <= ultimoValor ; i = i + incremento) {
    contagem = contagem + i + " ";
}

alert(contagem + "Acabou!");