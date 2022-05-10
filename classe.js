class matematica {
  soma(valorA, valorB) {
    return valorA + valorB;
  }
  subtracao(valorA, valorB) {
    return valorA - valorB;
  }
  multiplicacao(valorA, valorB) {
    return valorA * valorB;
  }
  divisao(valorA, valorB) {
    return valorA / valorB;
  }
}

var instanciaMatematica = new matematica();

var resultadosubtracao = instanciaMatematica.subtracao(4, 7);
var resultadosoma = instanciaMatematica.soma(4, 7);
var resultadomultiplicacao = instanciaMatematica.multiplicacao(4, 7);
var resultadodivisao = instanciaMatematica.divisao(4, 7);
console.log(resultadosubtracao);
console.log(resultadosoma);
console.log(resultadomultiplicacao);
console.log(resultadodivisao);
