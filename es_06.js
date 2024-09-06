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

/*setTimeout(() => {
  console.log("Stop setInterval");
  clearInterval(userInterval);
  //addUser("Pippo", printArray)
}, 6000);

const userInterval = setInterval(() => {
  addUser("Pippo", printArray);
}, 3000);
*/
function removeUser() {
  names.pop();
}

function addUser(name, callback) {
  names.push(name);
  callback();
}

function addFirstUser(name) {
  names.unshift(name);
}

function printArray() {
  console.log(names);
}

// Promise
// Simulo una chiamata fetch (server terzo) per recuperare i dati

function fetchGetUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const x = 5;
      const y = 2;
      let sum = x + y;
      if (sum === 4) {
        resolve(sum);
      } else {
        reject("Errore");
      }
    }, 2000);
  });
}

function fetchGetUserCars() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const x = 5;
      const y = 2;
      let sum = x + y;
      if (sum === 7) {
        resolve(sum);
      } else {
        reject("Errore");
      }
    }, 2000);
  });
}

// Eseguo il callback quando la Promise è finito
/*fetchGetUser().then((res) => {
    console.log(res)
}).catch((error) => {
    console.log(error)
})*/

//try...catch
async function callAsync() { 
  try {
  const res = await fetchGetUser()
  const res2 = await fetchGetUserCars()
  console.log(res)

} catch (error) {
  console.error(error);
  // Expected output: ReferenceError: nonExistentFunction is not defined
  // (Note: the exact output may be browser-dependent)
}
}

callAsync()

