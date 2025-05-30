

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age
const people = [
    {name: "Pelle", age: 16},
    {name: "Lisa", age: 17},
    {name: "Stina", age: 18},
    {name: "Gustav", age: 38}
]
// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen
function printNamesOver30 (personArray) {
for (let i=0; i<personArray.length;i++){
if (personArray[i].age>30){

    console.log(personArray[i].name);
}
}
}
    // anropa funktionen och skicka med arrayen som argument
printNamesOver30 (people);
}


module.exports = { uppg8 };