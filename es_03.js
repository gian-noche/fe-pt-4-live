// Simulazione quiz app

// Ricevi dati dal frontend
const payload = {
    type: 1, // 1 = animali, 2 = storia
    answers: ["cane", "giraffa", "elefante", "leone", "tigre"],
    newsletter: true
}

// Prendi i valori dal database
//const answers1 = ["cane", "giraffa", "balena", "leone", "tigre"]

const answers1 = 3

const answers2 = ["Mussolini", "Napoleone", "David", "Cleopatra", "Pippo"]

/* TODO: 
-- Verificare la tipologia del questioneario
-- Verificare che l'utente abbia risposto correttamente assegnando un punteggio
-- Dare un voto
-- Verificare che l'utente abbia abbonato alla newsletter
*/
var userScore = 0

// metodo per verificare le risposte
function checkAnswer (correctAnswers) {
    payload.answers.forEach((answer, index) => {
        if (answer === correctAnswers[index]){
            userScore += 1
        }
        })

}

/*if (payload.type === 1) {
    console.log("Hai scelto il questionario per animali!")
    checkAnswer(answers1)
    console.log(`Hai preso ${userScore} punti`)  
} else if (payload.type === 2) {
    console.log("Hai scelto il questionario per storia!")
    checkAnswer(answers2)

    console.log(`Hai preso ${userScore} punti`)

 } else {
    console.log("Questionario non trovato!")
}*/

switch (payload.type) {
    case 1:
        if(Array.isArray(answers1)) {
        console.log("Hai scelto il questionario per animali!")
        checkAnswer(answers1)
        console.log(`Hai preso ${userScore} punti`)
        } else {
            console.log("Error 500!")
        }
            break
    case 2:
        console.log("Hai scelto il questionario per storia!")
        checkAnswer(answers2)
        console.log(`Hai preso ${userScore} punti`)
            break
    default:
       console.log("Questionario non trovato!")
}
// verificare se la newsletter e' true
if (payload.newsletter) {

    setTimeout(() => {
        console.log("Grazie per esserti scritto alla newsletter")
    },
    3000)

}
