var letras = ['Vida','Amor','Paixão','Eternidade','Humor'];
var número = [3,1000,535,5,812765,45,0.4,87,1254];

letras.push('aprendizado');
número.push(7);

letras.sort();
número.sort((a,b)=>a-b);

console.log(`As palavras em ordem alfabetica ficam ${letras}. Esse array possue ${letras.length} palavras.`);
console.log(`Os números ordenados de forma crescente ficam: ${número}. Esse array possui ${número.length} números.\n`);

//Outra forma de mostrar os valores dentro de um array.
for(var posição=0;posição<letras.length;posição++){
    console.log(`Indice ${posição}: A palavra dentro dele é ${letras[posição]}`);
}
console.log('')

//Forma mais simplificada do for.
for (var posição in número){
    console.log(`Número ${número[posição]}`);
}
console.log('')

//Buscar um valor especifico
console.log(`A palavra buscada está no indice ${letras.indexOf('Paixão')}`);
console.log(`A palavra buscada está no indice ${letras.indexOf('Desistir')}`);