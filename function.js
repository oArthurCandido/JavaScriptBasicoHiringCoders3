function soma(operadorA, operadorB) {
  var resultadoC = operadorA + operadorB;
  return resultadoC;
}
function olaGama(nome) {
  console.log(`Olá, você é o ${nome}`);
}

var resultadoDaSoma = soma(8, '550');
var segundoResultado = soma('Arthur', ' Candido');
console.log(resultadoDaSoma);
console.log(segundoResultado);

olaGama('Arthur');
