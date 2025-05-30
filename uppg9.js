

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
  function sort(numbers){
    for (let i=0;i<numbers.length;i++){
        const num = numbers[i];

   // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"
    
    
if (num %2 ===0){
    console.log(num,"jämnt");
}else{
    console.log(num, "udda");
}
}}
    // anropa funktionen och skicka med en array som argument
    const numbers = [2,5,7,8,18,33,67,999];
    sort(numbers);

}
module.exports = { uppg9 };
