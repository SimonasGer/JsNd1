let catalogue = [
    {
        isbn: "978-9-5741-2551-7",
        releaseYear: 2024,
        name: "knyga1",
        pageCount: 312,
        category: "Trileris"
    },
    {
        isbn: "878-9-5741-2551-7",
        releaseYear: 2023,
        name: "knyga2",
        pageCount: 412,
        category: "Trileris"
    },
    {
        isbn: "778-9-5741-2551-7",
        releaseYear: 2022,
        name: "knyga3",
        pageCount: 512,
        category: "Trileris"
    },
    {
        isbn: "678-9-5741-2551-7",
        releaseYear: 2021,
        name: "knyga4",
        pageCount: 612,
        category: "Trileris"
    },
    {
        isbn: "578-9-5741-2551-7",
        releaseYear: 2024,
        name: "knyga5",
        pageCount: 712,
        category: "Mistika"
    },
    {
        isbn: "478-9-5741-2551-7",
        releaseYear: 2020,
        name: "knyga6",
        pageCount: 812,
        category: "Mistika"
    },
    {
        isbn: "378-9-5741-2551-7",
        releaseYear: 2019,
        name: "knyga7",
        pageCount: 912,
        category: "Mistika"
    },
    {
        isbn: "278-9-5741-2551-7",
        releaseYear: 2018,
        name: "knyga8",
        pageCount: 112,
        category: "Mistika"
    },
    {
        isbn: "178-9-5741-2551-7",
        releaseYear: 2024,
        name: "knyga9",
        pageCount: 212,
        category: "Detektyvas"
    },
    {
        isbn: "078-9-5741-2551-7",
        releaseYear: 2017,
        name: "knyga10",
        pageCount: 322,
        category: "Detektyvas"
    },
    {
        isbn: "918-9-5741-2551-7",
        releaseYear: 2017,
        name: "knyga11",
        pageCount: 332,
        category: "Detektyvas"
    },
    {
        isbn: "928-9-5741-2551-7",
        releaseYear: 2018,
        name: "knyga12",
        pageCount: 342,
        category: "Detektyvas"
    }
]
let bookCount = 0
let genre = (prompt("Įveskite knygos žanrą (Trileris, Mistika, Detektyvas)"));
for (book of catalogue){
    if (genre.toLowerCase() == (book.category).toLowerCase()){
        bookCount++;
    }
}

console.log(`Žanras: ${genre} (${bookCount} knygų)`);
for (book of catalogue){
    if (genre.toLowerCase() == (book.category).toLowerCase()){
        console.log(":")
        console.log(`ISBN: ${book.isbn}`);
        if (book.releaseYear == 2024){
            console.log(`Leidimo metai: ${book.releaseYear} (nauja knyga)`);
        } else {
            console.log(`Leidimo metai: ${book.releaseYear}`);
        }
        console.log(`Pavadinimas: ${book.name}`);
        console.log(`Puslapių skaičius: ${book.pageCount}`);
    }
}