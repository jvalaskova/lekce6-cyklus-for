// Použij výpis do konzole prohlížeče pomocí console.log('text')
// Konzoli otevřeš v Chrome stiskem F12 (na Windows) nebo Command-Option-I (na Macu)


let cisla = [];

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
}


//doprac.výpis na 3 řádky, + to pushnout přes commit 
 //+založit větev develop přes branch (viz konec videa)
  //vyprac.UKOL WHILE CYKLU


