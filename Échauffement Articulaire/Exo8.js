let nombreATester = 10;


function calculerFactorielle(nombre) {
    if (nombre < 0) {
      return "Impossible de calculer la factorielle d'un nombre négatif";
    } else if (nombre === 0 || nombre === 1) {
      return 1;
    } else {
      let factorielle = 1;
      for (let i = 2; i <= nombre; i++) {
        factorielle *= i;
      }
      return factorielle;
    }
  }
  
  let resultat = calculerFactorielle(nombreATester);
  console.log("La factorielle de " + nombreATester + " est : " + resultat);
  