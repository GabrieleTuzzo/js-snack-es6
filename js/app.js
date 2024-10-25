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
const argon = {
    nome: 'argon',
    peso: getRandomIntInclusive(minBikeWeight, maxBikeWeight),
}

const bergamont = {
    nome: 'bergamont',
    peso: getRandomIntInclusive(minBikeWeight, maxBikeWeight),
}

const bianchi = {
    nome: 'bianchi',
    peso: getRandomIntInclusive(minBikeWeight, maxBikeWeight),
}

const bici = [argon, bergamont, bianchi]

console.log(bici)

let lightestIndex
let lightestWeight = bici[0].peso
for (let i = 0; i < bici.length; i++) {
    const currentWeight = bici[i].peso
    if (currentWeight <= lightestWeight) {
        lightestIndex = i
    }
}

const lightestBike = bici[lightestIndex]

// Stampa solo L'ULTIMA bici più leggera trovata
for (let key in lightestBike) {
    console.log(lightestBike[key])
}

// Snack #2
const palermo = {
    nome: 'Palermo',
    'punti fatti': 0,
    'falli subiti': 0,
}

const germania = {
    nome: 'Germania',
    'punti fatti': 0,
    'falli subiti': 0,
}

const spagna = {
    nome: 'Spagna',
    'punti fatti': 0,
    'falli subiti': 0,
}

const squadre = [palermo, germania, spagna]

populateSquadre()

const printArray = []

squadre.forEach((element) => {
    printArray.push(element.nome)
    printArray.push(element['falli subiti'])
})

console.log(printArray)
