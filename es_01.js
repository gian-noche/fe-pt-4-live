var name = "Silvia"
const surname = "Rossi"
var age = 30
console.log("Il mio nome è " + name)

var number1 = 10
var number2 = 20
var result = number1 + number2
console.log(result)
var users = ["Mario", "Luigi", "Peach"]
console.log(users[1])

users.push("Toad")
users.forEach(function (user) {
    console.log(user)
})
/*
for (var user of users) {
    console.log(user)
} */

if (age < 18) {
    console.log("Non sei maggiorenne")
} else if (age > 65) {
    console.log("Sei over 65")
} else {
    console.log("Sei maggiorenne")
}