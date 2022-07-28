let num = [5,8,4]
num.push(1)
num.sort()
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro vetor é ${num[0]}`)

/*
for (var pos = 0;pos<num.length;pos++) {
    console.log(num[pos]);
}
*/



// num[3] = 6       irá adicionar o 6 na posição 3
// num.push(7)      irá adicionar o 7 na próxima vaga
// num.length       calcula a qtd de elementos
// num.sort()       coloca os números em ordem crescente

let pos = num.indexOf(7)
if (pos == -1){
    console.log('o valor não foi encontrado!')
}   else {
    console.log(`O valor 8 está na posição ${pos}`);
}
