var numeroSorteado = 5;

/*var tabuada = 7;

for (var i = 0; i <= 10; i++) {
  console.log(` Valor de ${tabuada} x ${i} é igual a ${tabuada * i}`);
}*/

for (var i = 0; i <= 10; i++) {
  if (numeroSorteado == i) {
    console.log(`O número ${i} foi sorteado`);
  } else {
    console.log(`Seu número ${i} não foi sorteado`);
  }
}
