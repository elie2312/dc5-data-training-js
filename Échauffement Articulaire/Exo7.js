let nombreDeLignes = 5;

for (let i = 1; i <= nombreDeLignes; i++) {

var ligne = '';
  for (let j = 1; j <= i; j++) {
    ligne += '* ';
  }
  console.log(ligne);
}
