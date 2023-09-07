let chaineATester = "test"; 

function Palindrome(chaine) {

    chaine = chaine.toLowerCase().replace(/\s/g, '');
  

    for (let i = 0, j = chaine.length - 1; i < j; i++, j--) {
      if (chaine[i] !== chaine[j]) {
        return false;
      }
    }
  
    return true;
  }
  
  let resultat = Palindrome(chaineATester);
  
  if (resultat) {
    console.log("'" + chaineATester + "' est un palindrome.");
  } else {
    console.log("'" + chaineATester + "' n'est pas un palindrome.");
  }
  