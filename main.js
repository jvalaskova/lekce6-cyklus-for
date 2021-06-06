// Použij výpis do konzole prohlížeče pomocí console.log('text')
// Konzoli otevřeš v Chrome stiskem F12 (na Windows) nebo Command-Option-I (na Macu)


/*let cisla = [];
// První příklad - vypiš vzestupně čísla od 0 do 10
let i = 0;
while (i<=9) {
    i++;
    cisla.push(i);
    vypisCislo(i, "#prvni");
    console.log(i);
}
// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu
let z=0; 
while(z<9) {
    z++;
    cisla.push(z);
    vypisCislo(z, "#druhy");
}

// Třetí příklad - vypiš sestupně čísla od 10 do 0
let y=11; 
while (y>=2) {
    y--;
    cisla.push(y);
    vypisCislo(y, "#treti");
} 
function vypisCislo(cislo, kamHoNapsat) {
    document.querySelector(kamHoNapsat).innerHTML += cislo + "\n";
}*/

//_____________________________________________________________________-
  //MŮJ PODÚKOL Z NETU    

//počítá aktuální věk
function calculateAge(birth) {   
    return 2021 - birth;
}
    
//počítá odchod do důchodu
function yearsUntilRetirement(year, firstName) {
    let age = calculateAge(year);
    let retirement = 65 - age;
    if (retirement >=0) {
        vypisVek(retirement, firstName, "#ctvrty");
        //console.log("Počet let do důchodu " + retirement + " let" + " u " + firstName);
    } else {
        retirement = -(retirement);
        vypisVek(retirement, firstName, "#ctvrty");
        //console.log(firstName + " je už v důchodu " + retirement + " let.");
    } 
}
    
function vypisVek(retirement, firstName, semSeToVypise) {
    document.querySelector(semSeToVypise).innerHTML = "Počet let do důchodu " + retirement + " let" + " u " + firstName;
}

yearsUntilRetirement(1960, "John"); 



