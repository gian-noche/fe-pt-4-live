// Creare un array
const arr = ["item1", "item2", "item3", "item4", "item5"]

// METODO 1: Ciclare l'array con il metodo degli array .forEach()
arr.forEach(element => {
//    items.innerHTML = `<p>${element}</p>`
  console.log("forEach: " + element)
});

// METODO 2: Ciclare l'array con il metodo .for loop
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log("for: " + element)
}

// METODO 3: Ciclare l'array con il metodo .forin
for (const key in arr) {
    console.log("forin: " + key)
    }

// METODO 4: Ciclare l'array con il metodo .forof
for (const item of arr) {
    console.log("forof: " + item)
}

// METODO 5: Ciclare l'array con while
let i = 0
while (i < arr.length) {
    console.log("while: " + arr[i])
    i++
}