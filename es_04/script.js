//const items = document.getElementById("itemsP")

//console.log(items)

// Creare un array
const arr = ["item1", "item2", "item3", "item4", "item5"]

// Creare gli elementi dinamicamente
//items.innerHTML = '<p class="blank">Pippo</p>'


// METODO 2: Ciclare l'array con il metodo .for loop
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    switch (element) {
        case "item2": 
            console.log("Gatto")
            break;

        case "item5":
            console.log("Cavallo")
            break;
    
        default: 
            console.log("Default")
            break;
    } 
}

