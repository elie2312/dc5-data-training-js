let n = 10;


function fibonacci(n) {
    let sequence = [];
  
    if (n <= 0) {
      return "Veuillez entrer un nombre entier positif.";
    } else if (n === 1) {
      sequence.push(0);
    } else if (n >= 2) {
      sequence.push(0, 1);
      for (let i = 2; i < n; i++) {
        let nextTerm = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextTerm);
      }
    }
  
    return sequence;
  }
  
  let resultat = fibonacci(n);
  
  console.log("Les premiers " + n + " termes de la suite de Fibonacci sont : " + resultat.join(", "));
  