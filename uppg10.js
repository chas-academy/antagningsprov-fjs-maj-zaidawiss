function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];
  
    // skapa tre arrayer - bigEven, smallOdd, other
    const bigEven = [];
    const smallOdd = [];
    const other =[];

    // loopa igenom numbers och placera talen i respektive array
    for (let i=0;i<numbers.length;i++){
    // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
  const num = numbers[i];
  if (num > 10 && num % 2 === 0) {
    bigEven.push(num);
        // smallOdd ska innehålla tal mindre än 10 och udda
  } else if (num < 10 && num % 2 === 1) {
    smallOdd.push(num);
        // other ska innehålla alla andra tal
  } else {
    other.push(num);
  }
    }

    // returnera ett objekt med de tre arrayerna
return {bigEven, smallOdd, other};
  
    
  
  }
  
  module.exports = { uppg10 };
  