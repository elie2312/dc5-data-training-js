var nombreATester = 7;


function PairOuImpair(nombre) {
  if (nombre % 2 === 0) {
    return "Le nombre est pair";
  } else {
    return "Le nombre est impair";
  }
}

var resultat = PairOuImpair(nombreATester);
console.log(resultat);
