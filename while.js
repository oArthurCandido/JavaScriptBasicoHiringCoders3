var achou = false;

var numeroSorteado = 5;
var possivelValor = 10;

while (!achou) {
  possivelValor += 1;
  if (numeroSorteado === possivelValor) {
    console.log(`Seu número (${possivelValor}) foi sorteado `);
    achou = true;
  } else if (numeroSorteado != possivelValor) {
    console.log('Não foi dessa vez');
    achou = true;
  }
}
