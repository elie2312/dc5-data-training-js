function Premier(nombre) {
    if (nombre <= 1) {
      return false;
    }
    if (nombre <= 3) {
      return true;
    }
    if (nombre % 2 === 0 || nombre % 3 === 0) {
      return false;
    }
  
    for (var i = 5; i * i <= nombre; i += 6) {
      if (nombre % i === 0 || nombre % (i + 2) === 0) {
        return false;
      }
    }
  
    return true;
  }
  

  for (let i = 1; i <= 50; i++) {
    if (Premier(i)) {
      console.log(i);
    }
  }
  