// Parašykite JavaScript programą, kuri įvertina studento bendrus taškus įvairiuose egzaminuose ir nustato jo pažymį. Vertinimo 
// kriterijai yra šie:
 
// Jei bendri taškai yra tarp 89 ir 100 (įskaitant), studentas gauna A+ pažymį.
// Jei egzaminas pažymimas kaip 'Baigiamasis egzaminas', studentas gaus A+ pažymį tik jei jo bendri taškai yra 90 ar daugiau. Tarkime, 
// kad baigiamasis egzaminas yra pažymimas 'true' kaip antrasis parametras, kitu atveju - tuščias.
// Jei studentas pasiekia A+ pažymį, programa turėtų grąžinti 'true', kitu atveju - 'false'."

let examCount = prompt("Įveskite egzaminų skaičių");
let scoreSum = 0;
for (let i = 0; i < examCount; i++){
    let examScore = prompt("Įveskite egzamino taškus");
    scoreSum += Number(examScore);
}
scoreAverage = scoreSum / examCount;
if (confirm("Vienas iš egzaminų yra baigiamasis")){
    console.log(scoreAverage >= 90);
} else {
    console.log(scoreAverage >= 89);
}