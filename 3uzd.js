// Parašykite JavaScript programą, kuri patikrina, ar duotas skaičius egzistuoja diapazone nuo 40 iki 10000. Pavyzdžiui, 40 egzistuoja 
// tarp 40 ir 4000.

let nr = prompt("Įveskite skaičių");
if (40 <= nr && nr <= 4000){
    console.log(`Skaičius ${nr} egzistuoja tarp 40 ir 4000`);
} else {
    console.log(`Skaičius ${nr} neegzistuoja tarp 40 ir 4000`);
}

