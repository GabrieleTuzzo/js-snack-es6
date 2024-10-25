console.log('Snack Array & Oggetti')
const minBikeWeight = 1
const maxBikeWeight = 20

// Functions
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function populateSquadre() {
    for (let i = 0; i < squadre.length; i++) {
        const currentElement = squadre[i]
        currentElement['punti fatti'] = getRandomIntInclusive(0, 30)
        currentElement['falli subiti'] = getRandomIntInclusive(0, 50)
    }
}

// Snack #1
const biciArray = [
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

console.log(biciArray)

let lightestIndex
let lightestWeight = biciArray[0].peso
for (let i = 0; i < biciArray.length; i++) {
    const currentWeight = biciArray[i].peso
    if (currentWeight <= lightestWeight) {
        lightestIndex = i
    }
}

const lightestBike = biciArray[lightestIndex]

// Stampa solo L'ULTIMA bici più leggera trovata
for (let key in lightestBike) {
    console.log(lightestBike[key])
}

// Snack #2
const squadre = [
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

populateSquadre()

const printArray = []

squadre.forEach((element) => {
    printArray.push(element.nome)
    printArray.push(element['falli subiti'])
})

console.log(printArray)

// Snack #3

/**
 * Returns a new array by portioning a given array based on min index and maximum index, returns undefined if data is not correct
 * @param {*} array array to portion
 * @param {number} min the index from where to start the portion of the given array
 * @param {number} max the index from where to end the portion of the given array
 */
function portionArray(array, min, max = array.length - 1) {
    const outputArray = []

    if (min > max || max > array.length || isNaN(min) || isNaN(max)) {
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

console.log(portionArray(squadre, -2))
