let n = 5;


function sommeNombresPairs(n) {
    let somme = 0;
    for (let i = 2; i <= n; i += 2) {
      somme += i;
    }
    return somme;
  }
  
  let resultat = sommeNombresPairs(n);
  console.log("La somme des nombres pairs de 1 à " + n + " est : " + resultat);
  