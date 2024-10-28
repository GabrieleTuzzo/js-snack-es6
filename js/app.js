console.log('Snack Array & Oggetti')
const minBikeWeight = 1
const maxBikeWeight = 20

// Functions
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function populateSoccerTeams() {
    for (let i = 0; i < soccerTeams.length; i++) {
        const currentElement = soccerTeams[i]
        currentElement['punti fatti'] = getRandomIntInclusive(0, 30)
        currentElement['falli subiti'] = getRandomIntInclusive(0, 50)
    }
}

// Snack #1
const bikesArray = [
    {
        nome: 'argon',
        peso: getRandomIntInclusive(minBikeWeight, maxBikeWeight),
    },
    {
        nome: 'bergamont',
        peso: getRandomIntInclusive(minBikeWeight, maxBikeWeight),
    },
    {
        nome: 'bianchi',
        peso: getRandomIntInclusive(minBikeWeight, maxBikeWeight),
    },
]

console.log(bikesArray)

let myBike = bikesArray[0]
for (let i = 1; i < bikesArray.length; i++) {
    const currentBike = bikesArray[i]
    if (currentBike.peso <= myBike.peso) {
        myBike = currentBike
    }
}

for (let key in myBike) {
    console.log(myBike[key])
}

// Snack #2
const printArray = []
const soccerTeams = [
    {
        nome: 'Palermo',
        'punti fatti': 0,
        'falli subiti': 0,
    },
    {
        nome: 'Germania',
        'punti fatti': 0,
        'falli subiti': 0,
    },
    {
        nome: 'Spagna',
        'punti fatti': 0,
        'falli subiti': 0,
    },
    {
        nome: 'Atalanta',
        'punti fatti': 0,
        'falli subiti': 0,
    },
    {
        nome: 'Bologna',
        'punti fatti': 0,
        'falli subiti': 0,
    },
    {
        nome: 'Fiorentina',
        'punti fatti': 0,
        'falli subiti': 0,
    },
]

populateSoccerTeams()

soccerTeams.forEach((element) => {
    printArray.push(element.nome)
    printArray.push(element['falli subiti'])
})

console.log(printArray)

// Snack #3
function portionArray(array, min, max = array.length - 1) {
    const outputArray = []

    if (
        min > max ||
        max > array.length ||
        min < array.length * -1 ||
        isNaN(min) ||
        isNaN(max)
    ) {
        return
    }

    if (min < 0 && max === array.length - 1) {
        min = max + (min + 1)
    }

    for (let i = min; i <= max; i++) {
        outputArray.push(array[i])
    }

    return outputArray
}

console.log(portionArray(soccerTeams, -6))
