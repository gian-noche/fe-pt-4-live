const users = []


function addUser(params) {
    users.push(params)
}

function removeUser(userName) {
   var check = false
    for (var i = 0; i < users.length; i++) {
        var user = users[i]
    
        if (user.name === userName) {
            check = true
            console.log(user.surname)
        }
    }

    if (check === false) {
        console.log("User not found")
    }
}

function appUsers() {
    addUser({ name: "Mario", surname: "Rossi", age: 30 })
    addUser({ name: "Luigi", surname: "Verdi", age: 23 })
    addUser({ name: "Peach", surname: "Pink", age: 19 })
    
    //console.log(users)

    removeUser("Gian")
}

//Eseguo la funzione principale
appUsers()