// Použij výpis do konzole prohlížeče pomocí console.log('text')
// Konzoli otevřeš v Chrome stiskem F12 (na Windows) nebo Command-Option-I (na Macu)


let cisla = [];

// První příklad - vypiš vzestupně čísla od 0 do 10
for (let i=0; i<=10; i=i+1) {
    cisla.push(i);
    vypisCislo(i, "#prvni");
    
   
}
// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu
for (let i=0; i<10; i=i+1) {
    cisla.push(i);
    vypisCislo(i, "#druhy");
    
}

// Třetí příklad - vypiš sestupně čísla od 10 do 0
for (let i=10; i>=0; i=i-1) {
    cisla.push(i);
    vypisCislo(i, "#treti");
    
}


function vypisCislo(cislo, kamHoNapsat) {
    document.querySelector(kamHoNapsat).innerHTML += cislo + "\n";
}


//doprac.výpis na 3 řádky, + to pushnout přes commit 
 //+založit větev develop přes branch (viz konec videa)
  //vyprac.UKOL WHILE CYKLU


