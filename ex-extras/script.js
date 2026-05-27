//desenvolva um algoritimo que mostre uma contagem regressiva de 30 ate 1, marcando os numeros que forem divisiveis por 4, exatamente mostrado abaixo: 30 29 [28] 27 26 25 [24] 23 22 21 [20] 19 18 17 [16]...
let resultado = "";

for(let i = 30; i >= 1; i--) 
    if (i % 4 === 0) {
        resultado += `[${i}] `
    } else {
        resultado += `${i} `;
    } 

alert(resultado);
