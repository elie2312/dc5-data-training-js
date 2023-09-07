let anneeATester = 2023;


function Bissextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
      return "L'année est bissextile";
    } else {
      return "L'année n'est pas bissextile";
    }
  }
  
  let resultat = Bissextile(anneeATester);
  console.log(resultat);
  