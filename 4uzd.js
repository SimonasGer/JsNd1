// Parašykite JavaScript programą, kuri sukurtų naują eilutę iš duotos eilutės. Ši programa pašalina pirmąjį ir paskutinį eilutės 
// simbolius, jei pirmasis arba paskutinis simbolis yra 'P'. Grąžinkite originalią eilutę, jei sąlyga nėra patenkinta.

let line = prompt("Įveskite eilutę");
let firstChar = line.charAt(0).toLowerCase(); 
let lastChar = line.charAt(line.length - 1).toLowerCase(); 

if (firstChar == "p" || lastChar == "p"){
    console.log(line);
} else {
    console.log(line.slice(1, -1));
}