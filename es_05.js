const arr = [];
const arr2 = [7, 6, 1, 2, 1];

// Aggiungere un elemento nell'array
arr.push("prova");
console.log(arr);

// Ciclare un array e inserire gli elementi dentro l'altro
arr2.forEach((arrItem) => arr.push(arrItem));
console.log(arr);

// METODO .map
const arrNew = arr.map((arrItem) => arrItem + 1);
console.log(arrNew);

// METODO .reduce
// arr.reduce(callback, valoreIniziale)
const avg = arr.reduce((a, arrItem) => a + arrItem, 0);
console.log(avg);





function checkElement(param) {
    // Operatore ternario (condizione? exp vero: exp falso)
    const avg22 = param.reduce((a, arrItem) => Number(arrItem)? a + arrItem: 0, 0);
    console.log(avg22)
}

checkElement(arr);
