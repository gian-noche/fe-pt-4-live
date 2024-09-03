/*
Abbiamo il nostro array di nomi, dobbiamo svolgere le seguenti operazioni:

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

Rimuovere il nome "Giovanni" dal nostro array
Aggiungere il nome "Pippo" alla coda del nostro array
Aggiungere il nome "Giovanni" come primo elemento del nostro array
Dopo ogni operazione inserire il console.log() del nostro array names
*/

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

/*
removeUser()
console.log(names)
addFirstUser("Giovanni")
console.log(names)
*/

setTimeout(() => {
    console.log("Stop setInterval")
    clearInterval(userInterval)
    //addUser("Pippo", printArray)
}, 6000)

const userInterval = setInterval(() => {
    addUser("Pippo", printArray)
}, 3000)




function removeUser() {
    names.pop()
}

function addUser(name, callback) {
    names.push(name)
    callback()
}

function addFirstUser(name) {
    names.unshift(name)
}

function printArray() {
    console.log(names)
} 


